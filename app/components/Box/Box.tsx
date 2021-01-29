import styled from "styled-components"
import {
  space,
  color,
  flexbox,
  SpaceProps,
  ColorProps,
  BackgroundColorProps,
  FlexboxProps,
  LayoutProps,
  layout,
} from "styled-system"

type BoxProps = SpaceProps &
  ColorProps &
  BackgroundColorProps &
  FlexboxProps &
  LayoutProps

const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${flexbox}
  ${layout}
`

export default Box
