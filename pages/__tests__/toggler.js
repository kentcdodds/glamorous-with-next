import React from 'react'
import {render, mount} from 'enzyme'
import Toggler from '../toggler'

test('has off styles applied by default', () => {
  const wrapper = renderToggle()
  expect(wrapper).toMatchSnapshot()
})

test('has on styles applied when initialToggledOn: true', () => {
  const wrapper = renderToggle({initialToggledOn: true})
  expect(wrapper).toMatchSnapshot()
})

test('invokes the onToggle prop when clicked', () => {
  const onToggle = jest.fn()
  const wrapper = mountToggle({onToggle})
  clickButton(wrapper)
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toBeCalledWith(true)
})

/**
 * Uses enzyme to mount the Toggle component
 * @param {Object} props - the props to mount the component with
 * @return {Object} - the enzyme wrapper
 */
function mountToggle(props) {
  return mount(createDefaultToggle(props))
}

/**
 * Uses enzyme to render the Toggle component
 * @param {Object} props - the props to render the component with
 * @return {Object} - the enzyme wrapper
 */
function renderToggle(props) {
  return render(createDefaultToggle(props))
}

function createDefaultToggle(props = {}) {
  return (
    <Toggler {...props}>
      {({on, getTogglerProps}) => (
        <div>
          <button {...getTogglerProps({'data-test': 'button'})}>
            Toggle me
          </button>
          <div>{on ? 'Toggled On' : 'Toggled Off'}</div>
        </div>
      )}
    </Toggler>
  )
}

/**
 * finds the button in the given wrapper and simulates a click event
 * @param {Object} wrapper - the enzyme wrapper
 */
function clickButton(wrapper) {
  wrapper.find(sel('button')).simulate('click')
}

// this helper will make it easier for you to find
// labeled elements in the wrapper:
// const tagInput = wrapper.find(sel('tags'))
function sel(id) {
  return `[data-test="${id}"]`
}
