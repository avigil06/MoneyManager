import React from 'react'
import {storiesOf} from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
.add('default', () => (
  <Button>Hello</Button>
))

.add('disabled', () => (
  <Button mode="disabled">Hello</Button>
))

.add('error', () => (
  <Button mode="error">Hello</Button>
))
