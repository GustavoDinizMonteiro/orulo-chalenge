const { REACT_APP_SECRETE: appSecrete } = process.env

export const list = (page = 1) => fetch(`https://www.orulo.com.br/api/v2/buildings?page=${page}`, {
  headers: { 'Authorization': appSecrete }
}).then(res => res.json())

export const getFavorites = (user_id = 1) => fetch(
  `http://localhost:3000/buildings?user_id=${user_id}&favorite=true`
).then(res => res.json())

export const addFavorite = (external_id, favorite, user_id = 1) => fetch(`http://localhost:3000/buildings`, {
  body: JSON.stringify({
    user_id,
    external_id,
    favorite
  }),
  headers: {  'Content-Type': 'application/json' },
  method: 'POST'
}).then(res => res.status === 204 ? { external_id }: res.json())