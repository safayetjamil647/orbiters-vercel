import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orbiters.io'
  
  const routes = [
    '',
    '/company',
    '/resources',
    '/work',
    '/demo',
    '/solutions',
    '/solutions/attract-clients',
    '/solutions/convert-leads',
    '/solutions/build-reputation',
    '/solutions/design-development',
    '/markets',
    '/markets/dealerships',
    '/markets/ev-fleet',
    '/markets/saas',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1.0 : (route.split('/').length > 2 ? 0.6 : 0.8),
  }))
}
