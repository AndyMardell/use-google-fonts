interface Options {
  addBodyClass?: Boolean
  display: String | null | undefined
}

const defaultOptions = {
  addBodyClass: false,
  display: 'swap'
}

export { Options, defaultOptions }
