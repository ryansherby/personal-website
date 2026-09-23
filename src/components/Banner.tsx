import type { SiteProfile } from '../content'
import { assetUrl } from '../lib/assetUrl'

type BannerProps = {
  profile: SiteProfile
}

export function Banner({ profile }: BannerProps) {
  if (!profile.banner) {
    return (
      <div
        className="site-banner site-banner--empty"
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="site-banner">
      <img
        className="site-banner__image"
        src={assetUrl(profile.banner)}
        alt={profile.bannerAlt ?? ''}
      />
    </div>
  )
}
