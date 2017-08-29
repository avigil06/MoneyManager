import React from 'react'
import {storiesOf} from '@storybook/react'
import Input from '.'

const Background = ({...props}) => (<div style={{backgroundColor: 'grey', padding: '2rem'}} {...props} />)

storiesOf('Input', module)
.add('default', () => (
  <Background>
    <Input label='email' value='' name='email' />
  </Background>
))

.add('withValue', () => (
  <Background>
    <Input label='email' value='andrew@test.test' name='email' />
  </Background>
))

.add('invalid', () => (
  <Background>
    <Input invalid label='email' value='andrew' name='email' />
  </Background>
))
