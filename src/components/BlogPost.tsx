import type { BlogPost as BlogPostData } from '../content'

type BlogPostProps = {
  post: BlogPostData
}

function formatDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

function splitParagraphs(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="blog-post">
      <h3 className="blog-post__title">{post.title}</h3>
      <time className="blog-post__date" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      {splitParagraphs(post.body).map((paragraph) => (
        <p key={paragraph} className="blog-post__body">
          {paragraph}
        </p>
      ))}
    </article>
  )
}
