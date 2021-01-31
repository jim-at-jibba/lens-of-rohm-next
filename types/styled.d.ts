import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Array<string>
    colors: {
      black: string
      white: string
      primary: string
    }

    space: Array<number>
    fontSizes: Array<number>
    fonts: {
      body: string
      heading: string
      monospace: string
    }
    fontWeights: {
      body: number
      heading: number
      bold: number
      black: number
    }
    lineHeights: {
      body: number
      heading: number
    }
    shadows: {
      small: string
      large: string
    }
    variants: Record<string, never>
    text: Record<string, never>
    buttons: {
      primary: {
        color: string
        bg: string
      }
    }
  }
}
