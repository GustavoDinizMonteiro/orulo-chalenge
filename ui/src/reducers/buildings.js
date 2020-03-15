import union from 'lodash.union'
import { states } from '../actions/buildings'

const buildings = (state = { pages: {}, data: [], page: 1, total_pages: 0, total: 0 }, action) => {
  switch (action.type) {
    case states.getAll.start:
    case states.getFavorites.start:
      return state
    
    case states.getAll.success:
      const { data: { page, buildings: data, total_pages, total } } = action
      state.pages[page] = data
      return {
        ...state,
        data: union(...Object.values(state.pages)),
        total_pages, total, page
      }

    case states.toogleFavorite:
      const { id } = action
      state.pages[state.page] = state.pages[state.page]
        .map(building => building.id === id ? 
            { ...building, favorite: !building.favorite }: 
            building
        )
      state.data = union(...Object.values(state.pages))
      return {...state}
    
    // fail cases
    default:
      return state
  }
}

export default buildings