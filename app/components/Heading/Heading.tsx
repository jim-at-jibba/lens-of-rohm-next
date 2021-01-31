import React from "react"
import styled from "styled-components"
import {
  variant,
  space,
  typography,
  VariantArgs,
  TypographyProps,
  SpaceProps,
} from "styled-system"

type HeadingProps = VariantArgs &
  TypographyProps &
  SpaceProps & {
    level: number
    children: React.ReactElement | string
    as?: string
  }
const variants = {
  1: {
    color: "black",
    fontFamily: "heading",
    fontWeight: "black",
    lineHeight: "heading",
    fontSize: "5",
  },
  2: {
    color: "black",
    fontFamily: "heading",
    fontWeight: "black",
    lineHeight: "heading",
    fontSize: "4",
  },
  3: {
    color: "black",
    fontFamily: "heading",
    fontWeight: "black",
    lineHeight: "heading",
    fontSize: "3",
  },
}

const HeadingBase = ({
  level,
  as: Component = `h${level}`,
  ...props
}: {
  level: number
  as?: string
}) => <Component {...props} />

const Heading = styled(HeadingBase)<HeadingProps>`
  ${() =>
    variant({
      variants,
      prop: "level",
    })}
  ${space}
  ${typography}
`

export default Heading
