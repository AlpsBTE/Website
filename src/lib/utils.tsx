import type { ReactNode } from 'react'

export function linkify(text: string): (string | ReactNode)[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const markdownLinkRegex = /\[([^\]]+)]\(([^)]+)\)/g

  return text
    .split(markdownLinkRegex)
    .flatMap((part: string, i: number) => {
      if (i % 3 === 1) {
        const linkText = part
        const linkUrl = text.split(markdownLinkRegex)[i + 1]
        return [
          <a
            href={linkUrl}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {linkText}
          </a>,
        ]
      }
      if (i % 3 === 2) {
        return []
      }
      return part.split(urlRegex).map((urlPart: string, j: number) => {
        if (urlPart.match(urlRegex)) {
          return (
            <a
              href={urlPart}
              key={`${i}-${j}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {urlPart}
            </a>
          )
        }
        return urlPart
      })
    })
    .filter(Boolean)
}

export function renderMarkdownText(text: string): ReactNode {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {linkify(line)}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      ))}
    </>
  )
}
