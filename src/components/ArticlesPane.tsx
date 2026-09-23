import { useEffect, useState } from 'react'
import { articles, medium, type MediaPost } from '../content'
import { fetchMediumArticles } from '../lib/medium'
import { GroupedList } from './GroupedList'
import { MediaPost as MediaPostCard } from './MediaPost'

type LoadState = 'idle' | 'loading' | 'ready' | 'error'

function renderArticle(item: MediaPost) {
  return <MediaPostCard key={item.href} post={item} />
}

export function ArticlesPane() {
  const [remoteItems, setRemoteItems] = useState<MediaPost[]>([])
  const [status, setStatus] = useState<LoadState>(medium.url ? 'loading' : 'idle')

  useEffect(() => {
    if (!medium.url) {
      return
    }

    let cancelled = false
    setStatus('loading')

    fetchMediumArticles(medium.url)
      .then((items) => {
        if (cancelled) {
          return
        }
        setRemoteItems(items)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) {
          setStatus('error')
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <GroupedList groups={articles} renderItem={renderArticle} />
      {status === 'loading' ? (
        <p className="content-status">Loading Articles…</p>
      ) : null}
      {status === 'error' ? (
        <p className="content-status">Could Not Load Medium Articles.</p>
      ) : null}
      {status === 'ready' && remoteItems.length > 0 ? (
        <GroupedList
          groups={[{ heading: medium.heading, items: remoteItems }]}
          renderItem={renderArticle}
        />
      ) : null}
    </>
  )
}
