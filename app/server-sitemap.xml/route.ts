import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

// Helper function to get recipe IDs from file structure
function getRecipeIds() {
  try {
    // This looks for any files in the recipes/[id] directory to extract possible recipe IDs
    // from the code (this is a simple approach, you could use a more sophisticated parsing method)
    const recipePagePath = path.join(
      process.cwd(),
      "app",
      "recipes",
      "[id]",
      "page.tsx"
    );
    const content = fs.readFileSync(recipePagePath, "utf8");

    // Extract IDs from content
    const matches = content.match(/"([^"]+)":\s*{[\s\S]+?title:/g);
    if (matches) {
      return matches.map((match) => {
        const idMatch = match.match(/"([^"]+)":/);
        const id = idMatch ? idMatch[1] : '';
        return id;
      });
    }

    // Fallback if parsing fails
    return [
      "nasi-goreng",
      "rendang",
      "soto-ayam",
      "gado-gado",
      "sate-ayam",
      "bakso",
    ];
  } catch (e) {
    console.error("Error extracting recipe IDs:", e);
    return [
      "nasi-goreng",
      "rendang",
      "soto-ayam",
      "gado-gado",
      "sate-ayam",
      "bakso",
    ];
  }
}

// Helper function to get category IDs
function getCategoryIds() {
  try {
    // Extract from categories page file
    const categoriesPagePath = path.join(
      process.cwd(),
      "app",
      "categories",
      "page.tsx"
    );
    const content = fs.readFileSync(categoriesPagePath, "utf8");

    // Extract category IDs from the content
    const matches = content.match(/id:\s*"([^"]+)"/g);
    if (matches) {
      return matches.map((match) => match.replace(/id:\s*"|"/g, ""));
    }

    // Fallback
    return [
      "sarapan",
      "makan-siang",
      "makan-malam",
      "camilan",
      "nasi",
      "daging",
      "sup",
      "sayur",
    ];
  } catch (e) {
    console.error("Error extracting category IDs:", e);
    return [
      "sarapan",
      "makan-siang",
      "makan-malam",
      "camilan",
      "nasi",
      "daging",
      "sup",
      "sayur",
    ];
  }
}

export async function GET() {
  const baseUrl = "https://gsc.backoffice-tim.web.id";

  // Get all recipe IDs
  const recipeIds = getRecipeIds();

  // Get all category IDs
  const categoryIds = getCategoryIds();

  // Create dynamic entries for recipes
  const recipeEntries = recipeIds.map((id) => ({
    loc: `${baseUrl}/recipes/${id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly" as const,
    priority: 0.7,
  }));

  // Create dynamic entries for categories
  const categoryEntries = categoryIds.map((id) => ({
    loc: `${baseUrl}/categories/${id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly" as const,
    priority: 0.7,
  }));

  // Combine all entries
  const allEntries = [...recipeEntries, ...categoryEntries];

  return getServerSideSitemap(allEntries);
}
