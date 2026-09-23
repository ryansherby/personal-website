import type { MediaPost as MediaPostData } from '../content'
import { assetUrl } from '../lib/assetUrl'
import { youtubeEmbedSrc } from '../lib/youtube'

type MediaPostProps = {
  post: MediaPostData
}

export function MediaPost({ post }: MediaPostProps) {
  const videoSrc = youtubeEmbedSrc(post.image)

  return (
    <article className="media-post">
      <h3 className="media-post__title">
        <a href={post.href} target="_blank" rel="noopener noreferrer">
          {post.title}
          <span className="media-post__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </h3>
      <div className="media-post__body">
        {videoSrc ? (
          <div className="media-post__video">
            <iframe
              src={videoSrc}
              title={post.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : (
          <a
            className="media-post__image-link"
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="media-post__image"
              src={assetUrl(post.image)}
              alt=""
              width={240}
              height={160}
            />
          </a>
        )}
        <p className="media-post__description">
          <a href={post.href} target="_blank" rel="noopener noreferrer">
            {post.description}
          </a>
        </p>
      </div>
    </article>
  )
}
