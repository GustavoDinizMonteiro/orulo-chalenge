import React from 'react'
import { Card as CardContainer, CardImg, CardTitle, CardText, Button, CardBody } from 'reactstrap'

const Card = ({ imageUrl, title, description }) => (
  <CardContainer style={styles.container}>
    <CardImg top width='100%' src={imageUrl} />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText style={styles.description}>{description.slice(0, 200)}</CardText>
      <Button>Button</Button>
    </CardBody>
  </CardContainer>
)

export default Card

const styles = {
  container: {
    width: '19rem',
    margin: '1rem'
  },
  description: {
    height: '10rem'
  }
}