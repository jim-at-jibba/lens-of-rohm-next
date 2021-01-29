import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      primary: string
      secondary: string
    }

    space: Array<number>
    fontSizes: Array<number>
  }
}
