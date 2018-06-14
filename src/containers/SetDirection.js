import { connect } from 'react-redux';
import { setDirection } from '../actions';
import Application from '../components/Application';

const mapStateToProps = state => ({
  snakeDirection: state
})

const mapDispatchToProps = dispatch => ({
  setSnakeDirection: direction => dispatch(setDirection(direction))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
