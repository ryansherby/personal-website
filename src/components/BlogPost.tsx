import type { BlogPost as BlogPostData } from '../content'
import { MarkdownText } from './MarkdownText'

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

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="blog-post">
      <h3 className="blog-post__title">{post.title}</h3>
      <time className="blog-post__date" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <MarkdownText className="blog-post__body">{post.body}</MarkdownText>
    </article>
  )
}
