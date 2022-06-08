const formatWalletAddress = (address: string, start = 7, end = 5) => {
  if (!address) {
    return ''
  }
  return address.slice(0, start) + '....' + address.slice(address.length - end)
}

export { formatWalletAddress }
export { default as createEmotionCache } from './createEmotionCache'
