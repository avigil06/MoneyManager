import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  border: 2px solid transparent;
  border-color: ${props => props.disabled ? 'grey' : 'blue'};
  border-radius: 12px;
  color: ${props => props.disabled ? 'grey' : 'blue'};
  background-color: white;
  padding: 0.25em 1em;
  transition: all 300ms ease-in-out;
  opacity: ${props => props.disabled ? .65 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'initial'};
  letter-spacing: .5px;
  outline: none;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: blue;
    color: white;
  }

  &:focus {
    color: red;
  }
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
