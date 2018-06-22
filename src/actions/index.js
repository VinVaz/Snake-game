
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

export const restartSnakeAttributes = () => ({
  type: 'RESTART_SNAKE_ATTRIBUTES',
})

export const setSnakePosition = position => ({
  type: 'SET_SNAKE_POSITION',
  position
})

export const scoreIncrement = () => ({
  type: 'SCORE_INCREMENT',
})

export const scoreRestart = () => ({
  type: 'SCORE_RESTART',
})

export const foodRestart = () => ({
  type: 'FOOD_RESTART',
})

export const setFoodPosition = position => ({
  type: 'SET_FOOD_POSITION',
  position
})