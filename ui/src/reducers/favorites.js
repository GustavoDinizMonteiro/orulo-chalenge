import { states } from '../actions/buildings'

const favorites = (state = { data: [] }, action) => {
  switch (action.type) {
    case states.getFavorites.start:
    case states.toogleFavorite.start:
      return state
    
    case states.getFavorites.success:
      return { data: action.data.map(item => item.external_id) }

    case states.toogleFavorite.success:
      if (action.favorite) {
        state.data = state.data.concat([action.data.external_id])
      } else {
        state.data = state.data.filter(item => item !== parseInt(action.data.external_id))
      }
      return { ...state }
    
    // fail cases
    default:
      return state
  }
}

export default favorites