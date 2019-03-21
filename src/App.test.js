import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('simple numerical tests', () => {
  expect(4).toBe(4)
  expect(4).toBeGreaterThan(0)
  expect(4).toBeLessThan(10)
  expect(4).toEqual(4)
  expect(4.215).toBeCloseTo(4.21)
})
