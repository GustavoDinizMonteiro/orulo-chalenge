import { states } from '../actions/buildings'

const favorites = (state = { data: [] }, action) => {
  switch (action.type) {
    case states.getFavorites.start:
      return state
    
    case states.getFavorites.success:
      return { data: action.data.map(item => item.external_id) }
    
    // fail cases
    default:
      return state
  }
}

export default favorites