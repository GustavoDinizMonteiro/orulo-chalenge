import states from './states'
import { list, getFavorites, addFavorite } from '../../providers/buildings'

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

  getFavorites: () => {
    return async(dispatch) => {
      const start = () => ({ type: states.getFavorites.start })
      const success = data => ({ type: states.getFavorites.success, data })
      const failure = err => ({ type: states.getFavorites.failure, err })
      
      try {
        dispatch(start())
        const data = await getFavorites()
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  },

  toogleFavorite: (id, favorite) => {
    return async(dispatch) => {
      const start = () => ({ type: states.toogleFavorite.start })
      const success = (data = {}) => ({ type: states.toogleFavorite.success, data, favorite })
      const failure = err => ({ type: states.toogleFavorite.failure, err })

      try {
        dispatch(start())
        const data = await addFavorite(id, favorite)
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  }
}
