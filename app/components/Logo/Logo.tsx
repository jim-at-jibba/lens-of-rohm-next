import Heading from "../Heading/Heading"
import Link from "next/link"

const Logo = () => {
  return (
    <Heading level={1} fontSize={40} m={4}>
      <Link href="/">LENS OF ROHM</Link>
    </Heading>
  )
}

export default Logo
