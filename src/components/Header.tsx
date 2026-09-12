import type { SiteProfile } from '../content'

type HeaderProps = {
  profile: SiteProfile
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className="site-header">
      <img
        className="site-header__photo"
        src={profile.photo}
        alt={profile.photoAlt}
        width={280}
        height={373}
      />
      <div className="site-header__copy">
        <h1 className="site-header__name">{profile.name}</h1>
        {profile.summary.map((paragraph) => (
          <p key={paragraph} className="site-header__summary">
            {paragraph}
          </p>
        ))}
      </div>
    </header>
  )
}
