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

test('simple string, objects and arrays tests', () => {
  expect('Matheus Abreu').toMatch(/Matheus/)
  expect('Matheus Abreu').not.toMatch(/Paul/)
  const arrList = [
    {
      id: 1,
      isActive: true,
      name: 'MiBr',
      country: 'Brazil'
    },
    {
      id: 2,
      isActive: false,
      name: 'Astralis',
      country: 'Denmark'
    }
  ]
  const obj = arrList[0]
  expect(obj).toHaveProperty('id')
  expect(obj).toHaveProperty('name', 'MiBr')
  expect(obj).toMatchObject({ name: 'MiBr' })
  expect(obj.isActive).toBeTruthy()
  expect(arrList).toHaveLength(2)
})
