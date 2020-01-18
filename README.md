# Use Google Fonts

A React hook for importing Google Fonts. Mostly (completely) borrowed from
shelldandy on [this Next.js GitHub issue](https://github.com/zeit/next.js/issues/512#issuecomment-322026199).

Uses [fontfaceobserver](https://fontfaceobserver.com/) with some optional body
classes.

## Installation

Installing the hook

```
npm i use-google-fonts
```

## Usage

Say you want to import Roboto (all weights) and Open Sans (300 only).You can use
the hook as follows:

```
useGoogleFonts([
  ['Roboto'],
  ['Open Sans', '300']
])
```

Full example:

```
import useGoogleFonts from 'use-google-fonts'

function MyReactComponent() {
  useGoogleFonts([
    ['Roboto'],
    ['Open Sans']
  ])

  return (
    <h1 style={{ font-family: "'Roboto', sans-serif" }}>
      Roboto Heading
    </h1>
    <p style={{ font-family: "'Open Sans', sans-serif" }}>
      Open Sans body
    </p>
  )
}

export default MyReactComponent
```

## Options

There are minimal options, but here they are:

```
useGoogleFonts([['Roboto', '400']], {
  addBodyClass: true, // This adds 'roboto' to the body class when loaded
  display: 'swap' // Display mode
})
```
