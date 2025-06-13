const domain = import.meta.env.PUBLIC_WP_DOMAIN

if (!domain) {
  throw new Error('PUBLIC_WP_DOMAIN environment variable is not defined')
}

const apiUrl = `${domain}/wp-json/wp/v2`
export const getPageInfo = async (slug: string) => {
  const response = await fetch(`${apiUrl}/pages?slug=${slug}`)
  if (!response.ok) throw new Error('Fetching data')

  const [data] = await response.json()
  const { title: { rendered: title }, content: { rendered: content } } = data
  return { title, content }

}