import {render, cleanup} from "@testing-library/react"
import Logo from "./Logo"

afterEach(cleanup)

describe("Logo Component", () => {
  it("should render properly", () => {
    const logo = render(<Logo />)
    expect(logo).toMatchSnapshot()
  })

  it("should contain my name", () => {
    const {getByTestId} = render(<Logo />)
    expect(getByTestId("logo")).toHaveTextContent("LENS OF ROHM")
  })
})
