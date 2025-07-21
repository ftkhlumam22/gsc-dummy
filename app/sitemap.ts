import { MetadataRoute } from 'next';

// Get recipe IDs from the recipe data
const recipeIds = [
  'nasi-goreng',
  'rendang',
  'soto-ayam',
  'gado-gado',
  'sate-ayam',
  'bakso'
];

// Get category IDs from the category data
const categoryIds = [
  'sarapan',
  'makan-siang',
  'makan-malam',
  'camilan',
  'nasi',
  'daging',
  'sup',
  'sayur'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gsc.backoffice-tim.web.id';
  
  // Base pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recipes`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Generate recipe page URLs
  const recipePages = recipeIds.map((id) => ({
    url: `${baseUrl}/recipes/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Generate category page URLs
  const categoryPages = categoryIds.map((id) => ({
    url: `${baseUrl}/categories/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...recipePages, ...categoryPages];
}