import React from 'react'
import range from 'lodash.range'

const rangeStart = page => page > 1 ? page - 1: page
const rangeFinish = (page, total_pages) => Math.min(rangeStart(page)+5, total_pages)

const Paginator = ({ page, total_pages, total, changePage }) => (
  <ul style={styles.list}>
    { page > 5 && <li style={styles.item()}
       onClick={() => changePage(1)}>Primeira Pagina</li> }

    { range(rangeStart(page), rangeFinish(page, total_pages))
        .map(i => <li key={i} onClick={() => changePage(i)} style={styles.item(i===page)}>{i}</li>) }

    { page !== total_pages && <li style={styles.item()} 
      onClick={() => changePage(total_pages)}>Ultima Pagina</li> }
  </ul>
)

const styles = {
  list: {
    listStyleType: 'none',
    display: 'flex',
    paddingInlineStart: 0
  },
  item: (selected = false) => ({
    padding: '0.2rem 0.6rem',
    border: '1px solid black',
    marginRight: '0.4rem',
    cursor: 'pointer',
    backgroundColor: selected ? 'gray': 'white',
    color: selected ? 'white': 'gray'
  })
}

export default Paginator