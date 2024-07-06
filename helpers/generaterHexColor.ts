   /**
     * Generate a hex color base on string
     *
     * @param {string} string - The parameter to be generated
     * @returns {string} - Will return Hex color 
     */

export const generateHex = (string: string) => {

  const h = [...string].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)

  const s = 95,
    l = 35 / 100
    
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }

  return `#${f(0)}${f(8)}${f(4)}`
}