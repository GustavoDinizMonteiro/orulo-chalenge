import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../actions/buildings'

class Feed extends React.Component {
  async componentDidMount() {
    try {
      console.log(this.props)
      this.props.dispatch(actions.getBuildings())
      console.log(this.props);
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    )
  }
}

const stateToProps = state => ({ buildings: state.buildings })
export default connect(stateToProps)(Feed)