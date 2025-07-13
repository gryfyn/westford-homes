// app/sitemap.xml/route.js
export async function GET() {
  const baseUrl = 'https://westfordhomesinc.com'

  const staticPages = [
    '',
    '/services',
    '/about',
    '/admissions',
    '/contact',
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (path) => `
          <url>
            <loc>${baseUrl}${path}</loc>
            <changefreq>monthly</changefreq>
            <priority>${path === '' ? '1.0' : '0.8'}</priority>
          </url>
        `
        )
        .join('')}
    </urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
