import {render, screen} from '@testing-library/react'
import Avatar from "./Avatar"

test('renders learn react link', async () => {
  let src = 'http://loremflickr.com/640/480/animals'
  let alt = 'Animals'
  render(<Avatar src={src} alt={alt} />)
  const el = await screen.findAllByAltText(alt)
  expect(el?.[0]).toBeInTheDocument()
})
