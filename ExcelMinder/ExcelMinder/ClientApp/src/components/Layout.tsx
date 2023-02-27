import React from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'

export type LayoutProps = {
  children?: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div>
      <NavMenu/>
      <Container tag="main">
        {props.children}
      </Container>
    </div>
  )
}

Layout.displayName = Layout.name
