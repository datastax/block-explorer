const formatAddress = (
  address: string | null | undefined,
  start = 7,
  end = 5
) => {
  if (!address) {
    return ''
  }
  return address.slice(0, start) + '....' + address.slice(address.length - end)
}

export { formatAddress }
export { default as createEmotionCache } from './createEmotionCache'
