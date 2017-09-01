import React from 'react'
import {rehydrate, css} from 'glamor'
import Toggle from 'react-toggled'
import {Div} from 'glamorous'
import ToggleButton from './toggle-button'

const onClassName = css({color: 'blue', fontSize: 30})
const offClassName = css({color: 'red', fontSize: 20})

function Index() {
  return (
    <Div display="flex" justifyContent="center" marginTop={40}>
      <Toggle>
        {({on, getTogglerProps}) => (
          <Div display="flex" justifyContent="center" flexDirection="column">
            <ToggleButton on={on} {...getTogglerProps()}>
              Toggle me
            </ToggleButton>
            <div className={on ? onClassName : offClassName}>
              {on ? 'Toggled On' : 'Toggled Off'}
            </div>
          </Div>
        )}
      </Toggle>
    </Div>
  )
}

export default Index
