export function withBasePath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  if (!path || !basePath) {
    return path
  }

  if (!path.startsWith('/')) {
    return path
  }

  if (path.startsWith(`${basePath}/`) || path === basePath) {
    return path
  }

  return `${basePath}${path}`
}