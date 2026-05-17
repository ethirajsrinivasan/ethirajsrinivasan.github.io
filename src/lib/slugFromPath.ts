/** Strip base path, query, hash, and trailing slashes from a route path. */
export function slugFromPath(path: string, basePath: '/portfolio' | '/blogs'): string {
  const prefix = `${basePath}/`
  let slug = path.startsWith(prefix) ? path.slice(prefix.length) : path.replace(/^\//, '')
  slug = slug.split('?')[0].split('#')[0].replace(/\/$/, '')
  return slug
}
