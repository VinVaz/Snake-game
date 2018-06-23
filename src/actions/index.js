
export const startGame = () => ({
  type: 'START_GAME',
})

export const endGame = () => ({
  type: 'END_GAME',
})

export const togglePauseGame = () => ({
  type: 'TOGGLE_PAUSE_GAME',
})

export const setDirection = direction => ({
  type: 'SET_DIRECTION',
  direction
})

export const Directions = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  UP: 'UP',
  DOWN: 'DOWN',
  get RANDOM(){
	const directions = [this.UP, this.DOWN, this.RIGHT, this.LEFT];
	const index = Math.floor(Math.random()* 4);
	return directions[index];
  }
}

export const  snakeSizeIncrement = () => ({
  type: 'SNAKE_SIZE_INCREMENT',
})

export const setSnakePosition = position => ({
  type: 'SET_SNAKE_POSITION',
  position
})

export const scoreIncrement = () => ({
  type: 'SCORE_INCREMENT',
})

export const setFoodPosition = position => ({
  type: 'SET_FOOD_POSITION',
  position
})

export const setCellValueBeforeSnake = val => ({
  type: 'SET_CELLVALUE_BEFORE_SNAKE',
  val
})

export const restartGameAttributes = () => ({
  type: 'RESTART_GAME_ATTRIBUTES',
})