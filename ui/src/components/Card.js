import React from 'react'
import { Card as CardContainer, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import Share from './Share'

const defaulImgUrl = 'https://radiosol.cl/wp-content/uploads/2014/10/default-img-400x240.gif'

const formatPrice = price => price
  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})

const sliceDescription = description => {
  if (description.length > 200)
    return `${description.slice(0, 197)}...`
  return description
}

const Card = ({ imageUrl = defaulImgUrl, title='', description='', price=0, favorite=false, shareUrl='', toogleFavorite }) => (
  <CardContainer style={styles.container}>
    <CardImg top width='100%' height='280px' src={imageUrl} />
    <CardBody>
      <CardTitle style={styles.title}>
        <a style={styles.link} href={shareUrl} target='_blank' rel='noopener noreferrer'>{title}</a>
      </CardTitle>
      <CardText style={styles.description}>{sliceDescription(description)}</CardText>
      <div style={styles.rowReverse}>
        <p style={styles.price}>
          Preço: <span style={styles.bold}>{formatPrice(price)}</span>
        </p>
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
  price: {
    lineHeight: '2.2rem'
  },
  title: {
    height: '2.5rem',
    fontSize: 17,
    lineHeight: '1.25rem'
  },
  description: {
    height: '9rem',
    minHeight: '9rem',
    fontSize: 16,
    color: 'gray'
  },
  rowReverse: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bold: {
    fontWeight: 'bold'
  },
  link: {
    color: '#738FF3'
  }
}