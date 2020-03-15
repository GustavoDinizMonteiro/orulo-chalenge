import union from 'lodash.union'
import { states } from '../actions/buildings'

const buildings = (state = { pages: {}, data: [], page: 1, total_pages: 0, total: 0 }, action) => {
  switch (action.type) {
    case states.getAll.start:
      return {...state}
    
    case states.getAll.success:
      const { data: { page, buildings: data, total_pages, total } } = action
      state.pages[page] = data
      return {
        ...state,
        data: union(...Object.values(state.pages)),
        total_pages, total, page
      }
    
    // fail cases
    default:
      return state
  }
}

export default buildings