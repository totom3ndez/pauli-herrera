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


export const getVideo = async (id: number) => {
  try {
    const response = await fetch(`${domain}/wp-json/wp/v2/media/${id}`)

    // Log the response status
    console.log('Response status:', response.status)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('API Response:', data) // Log full response

    if (!data.source_url) {
      throw new Error('Video URL not found in response')
    }

    const videoUrl = data.source_url
    console.log('Video URL:', videoUrl) // Log the extracted URL
    return videoUrl
  } catch (error) {
    console.error('Error fetching video:', error)
    throw error
  }
}