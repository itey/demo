// Wallet address thumbnail display
export const omitAddress = (val) => {
  if (val.length <= 7) {
    return val
  }
  const prefix = val.substring(0, 7)
  const suffix = val.substring(val.length - 5)
  return prefix + '...' + suffix
}

// Format decimal places
export const decimalPlace2 = (val) => {
  return (Math.floor(val * 100) / 100).toFixed(2)
}
export const decimalPlace3 = (val) => {
  return (Math.floor(val * 1000) / 1000).toFixed(3)
}
export const decimalPlace4 = (val) => {
  return (Math.floor(val * 10000) / 10000).toFixed(4)
}
