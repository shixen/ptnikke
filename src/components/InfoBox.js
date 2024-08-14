import React from 'react'
import {Card, Button} from 'react-bootstrap'

const InfoBox = () => {
  return (
<Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Who am i ? </Card.Title>
    <Card.Text>
      Press the button below to learn about my experiences in the gym industry!
    </Card.Text>
    <Button variant="primary">About me</Button>
  </Card.Body>
</Card>
  )
}

export default InfoBox;