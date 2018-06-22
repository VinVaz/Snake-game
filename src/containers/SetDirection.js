import { connect } from 'react-redux';
import { setDirection } from '../actions';
import { togglePauseGame } from '../actions';
import Application from '../components/Application';

const mapStateToProps = state => ({
  snakeDirection: state.direction,
  isGamePaused: state.gameStatus.isGamePaused
});

const mapDispatchToProps = dispatch => ({
  setSnakeDirection: direction => dispatch(setDirection(direction)),
  togglePauseGame: () => dispatch(togglePauseGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
