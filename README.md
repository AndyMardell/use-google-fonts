# Use Google Fonts

A React hook for importing Google Fonts. Mostly (completely) borrowed from
shelldandy on [this Next.js GitHub issue](https://github.com/zeit/next.js/issues/512#issuecomment-322026199).

Uses [fontfaceobserver](https://fontfaceobserver.com/) with some optional body
classes.

## Installation

Installing the hook

```bash
npm i use-google-fonts
```

## Usage

Say you want to import Roboto (all weights) and Open Sans (300 only).You can use
the hook as follows:

```js
useGoogleFonts([['Roboto'], ['Open Sans', '300']])
```

Full example:

```js
import React from 'react'
import useGoogleFonts from 'use-google-fonts'

function MyReactComponent() {
  useGoogleFonts([
    ['Roboto'],
    ['Open Sans']
  ])

  return (
    <h1 style={{ fontFamily: "'Roboto', sans-serif" }}>
      Roboto Heading
    </h1>
    <p style={{ fontFamily: "'Open Sans', sans-serif" }}>
      Open Sans body
    </p>
  )
}

export default MyReactComponent
```

## Options

There are only a couple of options:

```js
useGoogleFonts([['Roboto', '400']], {
  addBodyClass: true, // This adds 'roboto' to the body class when loaded
  display: 'swap' // Display mode
})
```

## JSX Component Usage

If you're not into the `useGoogleFonts()` hook, you can place a JSX element
anywhere in your app to import the fonts. Ideally this should be at the 'start'
of your app, E.g. in `app.js`

```js
<GoogleFonts fonts={[['Montserrat', '800'], ['Open Sans']]} />
```

With options:

```js
<GoogleFonts fonts={[['Montserrat']]} options={{ addBodyClass: true }} />
```

Full example using a class component:

```js
import React from 'react'
import { GoogleFonts } from 'use-google-fonts'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        // 1. Import your font(s)
        <GoogleFonts fonts={[['Montserrat', '800']]} />
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        // 2. Specify your font-family
        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
```

## Changelog

### 1.0.2 (20 January 2020)

- Added a JSX component as an alternative to the hook
- Updated this README.md

### 1.0.1 (19 January 2020)

- Initial release
