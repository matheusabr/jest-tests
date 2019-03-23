import React from 'react'
import renderer from 'react-test-renderer'

import Link from './index'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page='http://www.facebook.com'>Facebook</Link>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Manually trigger the callback - onMouseEnter
  tree.props.onMouseEnter()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Manually trigger the callback - onMouseLeave
  tree.props.onMouseLeave()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
