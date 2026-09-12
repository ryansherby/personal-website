import type { MediaPost as MediaPostData } from '../content'

type MediaPostProps = {
  post: MediaPostData
}

export function MediaPost({ post }: MediaPostProps) {
  return (
    <a
      className="media-post"
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="media-post__title">
        {post.title}
        <span className="media-post__arrow" aria-hidden="true">
          ↗
        </span>
      </h3>
      <div className="media-post__body">
        <img
          className="media-post__image"
          src={post.image}
          alt=""
          width={240}
          height={160}
        />
        <p className="media-post__description">{post.description}</p>
      </div>
    </a>
  )
}
