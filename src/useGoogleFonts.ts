import FontFaceObserver from 'fontfaceobserver'
import { useEffect } from 'react'
import { Font, Options, defaultOptions } from './types'

/**
 * useFonts hook
 *
 * A React hook for loading Google Fonts using fontfaceobserver
 *
 * Example:
 * ```
 * import useGoogleFonts from 'use-google-fonts'
 *
 * useGoogleFonts([
 *   ['Roboto', '300,500']
 *   ['Open Sans']
 * ])
 * ```
 *
 * @param fonts Array of Google fonts and sizes
 * @param options Options
 * @returns void
 */
const useGoogleFonts = (
  fonts: Font[],
  options: Options = defaultOptions
): void => {
  const fontsWithSizes = fonts.map((fontArray) => {
    const font = fontArray[0].replace(new RegExp(' ', 'g'), '+')
    let sizes = ''

    if (fontArray.length === 2) {
      sizes = ':' + fontArray[1]
    }

    return font + sizes
  })

  const fontsUri = fontsWithSizes.join('|')
  const swap = `&display=${options.display}`

  useEffect(() => {
    const link = document.createElement('link')
    link.href = `https://fonts.googleapis.com/css?family=${fontsUri + swap}`
    link.rel = 'stylesheet'

    document.head.appendChild(link)

    fonts.map(async (font) => {
      const fontClass = font[0].replace(new RegExp(' ', 'g'), '-')
      const fontFace = new FontFaceObserver(font[0])
      await fontFace.load()
      if (options.addBodyClass) {
        document.documentElement.classList.add(fontClass.toLowerCase())
      }
    })
  }, [fonts])
}

export { Font, Options }
export default useGoogleFonts
