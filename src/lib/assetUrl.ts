/** Prefix site-root paths with Vite's base URL. */
export function assetUrl(path: string): string {
  if (!path) {
    return path
  }

  if (/^(https?:|data:|mailto:|blob:)/i.test(path) || path.startsWith('//')) {
    return path
  }

  const base = import.meta.env.BASE_URL
  const relative = path.replace(/^\//, '')
  return `${base}${relative}`
}
