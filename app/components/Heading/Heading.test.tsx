import {render} from "@testing-library/react"
import Heading from "./Heading"

describe("Heading component", () => {
  it("should render an h1 tag", () => {
    const {container} = render(<Heading level={1}>Test</Heading>)
    expect(container.querySelector("h1")).toBeTruthy()
    expect(container).toHaveTextContent("Test")
  })
  it("should render an h2 tag", () => {
    const {container} = render(<Heading level={2}>Test</Heading>)
    expect(container.querySelector("h2")).toBeTruthy()
    expect(container).toHaveTextContent("Test")
  })
  it("should render an h3 tag", () => {
    const {container} = render(<Heading level={3}>Test</Heading>)
    expect(container.querySelector("h3")).toBeTruthy()
    expect(container).toHaveTextContent("Test")
  })
})
