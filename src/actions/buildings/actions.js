import states from './states'
import { list } from '../../providers/buildings'

export default {
  getBuildings: page => {
    return async(dispatch) => {
      const start = () => ({ type: states.getAll.start })
      const success = data => ({ type: states.getAll.success, data })
      const failure = err => ({ type: states.getAll.failure, err })
      
      try {
        dispatch(start())
        const data = await list(page)
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  },

  toogleFavorite: id => {
    return async(dispatch) => {
      dispatch({ type: states.toogleFavorite, id })
    }
  }
}
