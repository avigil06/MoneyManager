import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  border: 2px solid transparent;
  border-color: ${props => props.invalid ? 'red' : 'white'};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  position: relative;
  height: 45px;
  width: 100%;
  transition: all 300ms ease-in-out;
`

const Input = styled.input`
  border: 0;
  outline: none;
  padding-left: 10px;
  position: absolute;
  bottom: 6px;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  color: white;
  width: 100%;

`

const Label = styled.label`
  position: absolute;
  text-transform: capitalize;
  left: 10px;
  bottom: ${props => props.hasFocus ? '28px' : '6px'};
  font-size: ${props => props.hasFocus ? '.75rem' : '1rem'};
  color: ${props => props.invalid ? 'red' : 'white'};
  transition: all 300ms ease-in-out;
`

export default class extends Component {
  state = {
    hasFocus: true,
  }

  componentDidMount() {
    this.handleBlur();
  }


  render() {
    const {hasFocus} = this.state
    const {
      label,
      value,
      name,
      ...props
    } = this.props

    return (
      <Wrapper className='Input' invalid={props.invalid}>
        <Label
          for={`field_${name}`}
          invalid={props.invalid}
          hasFocus={hasFocus}>{label}</Label>
        <Input
          id={`field_${name}`}
          name={name}
          type='email'
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value} />
      </Wrapper>
    )
  }

  handleFocus = () => {
    this.setState({hasFocus: true})
  }

  handleBlur = () => {
    if (this.props.value.length < 1) {
      this.setState({hasFocus: false})
    }
  }
}
