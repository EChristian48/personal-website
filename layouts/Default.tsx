import { FC } from 'react'
import { Container, Nav } from '~/components'

const Default: FC = ({ children }) => (
  <>
    <Nav />
    <Container>{children}</Container>
  </>
)

export default Default
