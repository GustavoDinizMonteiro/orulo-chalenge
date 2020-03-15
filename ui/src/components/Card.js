import React from 'react'
import { Card as CardContainer, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import Share from './Share'

const Card = ({ imageUrl, title='', description='', price=0, favorite=false, shareUrl, toogleFavorite }) => (
  <CardContainer style={styles.container}>
    <CardImg top width='100%' height='280px' src={imageUrl} />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText style={styles.description}>{description.slice(0, 200)}</CardText>
      <div style={styles.rowReverse}>
        <p>Preço: {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
          <Share shareUrl={shareUrl}/>
          { favorite ? 
            <Favorite onClick={toogleFavorite} htmlColor='red' fontSize='large'/>: 
            <FavoriteBorder onClick={toogleFavorite} htmlColor='red' fontSize='large'/> 
          }
      </div>
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
    height: '10rem',
    minHeight: '10rem'
  },
  rowReverse: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}