import { navigation, type NavSection } from '../content'

type NavBarProps = {
  active: NavSection
  onChange: (section: NavSection) => void
}

export function NavBar({ active, onChange }: NavBarProps) {
  return (
    <nav className="site-nav" aria-label="Site sections">
      <div className="site-nav__list" role="tablist">
        {navigation.map((item) => {
          const isActive = item.id === active
          return (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              className={
                isActive ? 'site-nav__link is-active' : 'site-nav__link'
              }
              aria-selected={isActive}
              aria-controls="content-panel"
              onClick={() => onChange(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
