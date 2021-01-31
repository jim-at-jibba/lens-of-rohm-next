import Box from "../Box/Box"
import Logo from "../Logo/Logo"

const Header = () => {
  return (
    <Box alignItems="center" justifyContent="center" flex={1} m={2}>
      <Logo />
    </Box>
  )
}

export default Header
