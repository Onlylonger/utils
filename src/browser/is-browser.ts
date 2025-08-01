export function isBrowser() {
  const hasWindow = typeof window !== 'undefined' && window !== null
  const hasDocument = typeof document !== 'undefined' && document !== null

  if (!hasWindow || !hasDocument) return false

  return true
}
