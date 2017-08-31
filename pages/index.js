import React from 'react'
import {rehydrate, css} from 'glamor'
import Toggle from './toggler'
import ToggleButton from './toggle-button'

function Index() {
  return (
    <div>
      <Toggle>
        {({on, getTogglerProps}) => (
          <div>
            <ToggleButton {...getTogglerProps({on})}>Toggle me</ToggleButton>
            <div>{on ? 'Toggled On' : 'Toggled Off'}</div>
          </div>
        )}
      </Toggle>
    </div>
  )
}

export default Index
