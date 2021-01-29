import {
  variant,
  VariantArgs,
  typography,
  TypographyProps,
  color,
} from "styled-system"

import styled from "styled-components"

type TextProps = VariantArgs &
  TypographyProps & {
    variant?: "tiny" | "small" | "medium" | "massive" | "large"
  }

const Text = styled.p<TextProps>`
  ${typography}
  ${color}

  font-family: Montserrat, sans-serif;

  ${() =>
    variant({
      scale: "text",
      variants: {
        tiny: {
          color: "black",
          fontSize: 0,
        },
        small: {
          color: "red",
          fontSize: 7, // 7 not in fontSize array to actual value used
        },
        medium: {
          fontSize: 5,
        },
        massive: {
          color: "black",
          fontSize: 6,
        },
      },
    })}
`

export default Text
