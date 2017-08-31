import glamorous from 'glamorous'
import {darken} from 'polished'

// imagine this is in a "components" file
const primaryColor = '#337ab7'
const toggledOnStyles = {
  backgroundColor: darken(0.15, primaryColor),
  borderColor: darken(0.25, primaryColor),
  '&:hover,&:active,&:focus': {
    backgroundColor: darken(0.2, primaryColor),
    borderColor: darken(0.3, primaryColor),
  },
}
const toggledOffStyles = {
  backgroundColor: primaryColor,
  borderColor: darken(0.1, primaryColor),
  '&:hover,&:active,&:focus': {
    backgroundColor: darken(0.1, primaryColor),
    borderColor: darken(0.2, primaryColor),
  },
}
const ToggleButton = glamorous.button(
  {
    display: 'inline-block',
    padding: '6px 12px',
    marginBottom: '0',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.4',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '4px',
    color: '#fff',
  },
  props => (props.on ? toggledOnStyles : toggledOffStyles)
)

export default ToggleButton
