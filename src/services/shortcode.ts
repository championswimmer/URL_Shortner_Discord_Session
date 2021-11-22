
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'

export function intToRadix64 (num: number) {
  let result = ''
  while (num > 0) {
    result = ALPHABET[num % 64] + result
    num = Math.floor(num / 64)
  }
  return result
}

export function radix64ToInt (str: string) {
  let result = 0
  for (let i = 0; i < str.length; i++) {
    result = result * 64 + ALPHABET.indexOf(str[i])
  }
  return result
}

export function genRandomShortcode () {
  const randomInt = Math.floor(Math.random() * Math.pow(2, 48))
  const shortCode = intToRadix64(randomInt)

  return ({ randomInt, shortCode })
}
