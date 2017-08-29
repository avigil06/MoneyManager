import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  border: 2px solid transparent;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-color: ${props => props.disabled ? 'grey' : 'white'};
  color: ${props => props.disabled ? 'grey' : 'white'};
  background-color: transparent;
  padding: 0.25em 1em;
  transition: all 300ms ease-in-out;
  opacity: ${props => props.disabled ? .65 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'initial'};
  letter-spacing: .5px;
  outline: none;
  font-weight: bold;
  text-transform: uppercase;
`

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  primary: true,
  disabled: false,
}

export default ({children, ...props}) => <Button className='Button' {...props}>{children}</Button>
