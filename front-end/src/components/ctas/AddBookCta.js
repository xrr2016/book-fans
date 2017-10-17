import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AddBookCta = () => (
  <Card center>
    <Card.Content textAlign="center">
      <Card.Header>新增一本书</Card.Header>
      <Link to="/books/new">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
)
export default AddBookCta
