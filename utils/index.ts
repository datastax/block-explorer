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

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const getDifference = (timestamp: number) => {
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

export { formatAddress, getDifference, numberWithCommas }
export { default as createEmotionCache } from './createEmotionCache'
