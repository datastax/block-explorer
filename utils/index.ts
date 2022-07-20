const formatAddress = (
  address: string | null | undefined,
  start = 7,
  end = 5
) => {
  if (!address) {
    return ''
  }
  if (address.length < 15) return address
  return address.slice(0, start) + '....' + address.slice(address.length - end)
}

function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const getDifference = (timestamp: number | undefined | null) => {
  if (!timestamp) return 0
  const currentDate = new Date().getTime()
  const time = new Date(timestamp * 1000).getTime()

  let delta = Math.abs(currentDate - time) / 1000

  const days = Math.floor(delta / 86400)
  delta -= days * 86400

  const hours = Math.floor(delta / 3600) % 24
  delta -= hours * 3600

  const minutes = Math.floor(delta / 60) % 60
  delta -= minutes * 60

  const seconds = Math.floor(delta % 60)

  let templateString = [days, hours, minutes, seconds]
    .map((a, index) => {
      switch (index) {
        case 0:
          return a > 0 ? `${a} Days, ` : ''
        case 1:
          return a > 0 ? `${a} Hours, ` : ''
        case 2:
          return a > 0 ? `${a} Mins, ` : ''
        case 3:
          return a > 0 ? `${a} Secs` : ''
      }
    })
    .join('  ')
    .replaceAll('  ', ' ')

  if (templateString.split(', ').length > 2) {
    templateString = templateString.split(', ').splice(0, 2).join(', ')
  }
  return templateString
}

const etherToGwei = (num: number) => {
  if (num) return num * 1000000000
  return 0
}

const calculateStaticBlockReward = (block: string) => {
  const blockNumber = parseInt(block)
  if (0 < blockNumber && blockNumber < 4369999) {
    return 5
  } else if (4369999 < blockNumber && blockNumber < 7279999) {
    return 3
  } else if (7279999 < blockNumber) {
    return 2
  }
}

const convertToMillion = (num: number) => {
  return `${num / 1e6} M`
}

const weiToEther = (num: number | undefined | null, fixed?: number) => {
  if (!num) return 0
  if (fixed) return (num / 1e18).toFixed(fixed)
  return num / 1e18
}

const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value)
}
const fixed = (number: number | undefined | null | string, fixed: number) => {
  if (!number) return 0
  if (typeof number === 'string') return parseFloat(number).toFixed(fixed)
  return number.toFixed(fixed)
}

export {
  formatAddress,
  getDifference,
  numberWithCommas,
  etherToGwei,
  calculateStaticBlockReward,
  convertToMillion,
  weiToEther,
  copyToClipboard,
  fixed,
}
export { default as createEmotionCache } from './createEmotionCache'
