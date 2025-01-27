import React from 'react'
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
  Pane,
  Block,
  Blocked,
  Panel,
} from '../assets/css/form'

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}
Form.Block = function FormBlock({ children, ...restProps }) {
  return <Block {...restProps}>{children}</Block>
}
Form.Blocked = function FormBlocked({ children, ...restProps }) {
  return <Blocked {...restProps}>{children}</Blocked>
}
Form.Pane = function FormPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Form.Panel = function FormPanel({ children, ...restProps }) {
  return <Panel {...restProps}>{children}</Panel>
}
Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
}
