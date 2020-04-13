export function addCount(item) {
  return {
    type: 'ADD_COUNT',
    item
  }
}

export function resetGame(item) {
  return {
    type: 'RESET_GAME',
    item
  }
}