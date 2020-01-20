import React, { FunctionComponent, ReactNode } from 'react'
import useGoogleFonts from './useGoogleFonts'
import { Font, Options } from './types'

interface Props {
  fonts: Font[]
  options?: Options
}

/**
 * GoogleFonts JSX Element
 *
 * Example:
 * `<GoogleFonts fonts={[['Roboto', '300,500'], ['Open Sans']]} />`
 */
const GoogleFonts: FunctionComponent<Props> = ({
  fonts,
  options,
  children
}) => {
  useGoogleFonts(fonts, options)

  if (children) {
    return <>{children}</>
  }

  return null
}

export default GoogleFonts
