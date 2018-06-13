
export const startGame = id => ({
  type: 'START_GAME',
  id
})

export const pauseGame = id => ({
  type: 'PAUSE_GAME',
  id
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