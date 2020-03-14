const { REACT_APP_SECRETE: appSecrete } = process.env

export const list = (page = 1) => fetch(`https://www.orulo.com.br/api/v2/buildings?page=${page}`, {
  headers: { 'Authorization': appSecrete }
})