import React from 'react'
import renderer from 'react-test-renderer'
import {render} from 'enzyme'
import snapshotDiff from 'snapshot-diff'
import glamorSerializer from 'jest-glamor-react'
import prettyFormat from 'pretty-format'
import ToggleButton from '../toggle-button'

test('has off styles applied by default', () => {
  const wrapper = render(<ToggleButton />)
  expect(wrapper).toMatchSnapshot()
})

test('has different styles when on: true', () => {
  expect(
    snapshotDiff(serialize(<ToggleButton />), serialize(<ToggleButton on />))
  ).toMatchSnapshot()
})

function serialize(ui) {
  return glamorSerializer
    .print(renderer.create(ui).toJSON(), val =>
      prettyFormat(val, {
        plugins: [prettyFormat.plugins.ReactTestComponent],
      })
    )
    .trim()
}
