import { useEffect } from 'react'

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`,
  )
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.content = content
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const fullTitle =
      title.includes('Alexandria') || title.includes('الإسكندرية')
        ? title
        : `${title} | الإسكندرية للأبواب`
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
  }, [title, description])
}
