export default async function sitemap() {
  let routes = [
    '',
    '/changelog',
    '/pricing',
    '/licence-manager',
    'wall-of-love',
    '/download',
    '/appsumo',
    '/terms',
    '/privacy',
    '/how-to',
  ].map((route) => ({
    url: `https://annotateapp.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
