import type { ReactNode } from 'react'
import type { ContentGroup } from '../content'

type GroupedListProps<T> = {
  groups: ContentGroup<T>[]
  renderItem: (item: T, index: number) => ReactNode
}

export function GroupedList<T>({ groups, renderItem }: GroupedListProps<T>) {
  return (
    <div className="grouped-list">
      {groups.map((group, groupIndex) => (
        <section
          key={group.heading ?? `group-${groupIndex}`}
          className="content-group"
          aria-label={group.heading}
        >
          {group.heading ? (
            <h2 className="content-group__heading">{group.heading}</h2>
          ) : null}
          <div className="content-group__items">
            {group.items.map((item, itemIndex) =>
              renderItem(item, itemIndex),
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
