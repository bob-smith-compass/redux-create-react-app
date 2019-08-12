export function increaseAmout() {
    return {
        type: 'CHANGE_ORIGINAL_AMMOUTN', 
        data: 100
    }
}

export function increase() {
  return{
      type: 'INCREASE'}
}

export function decrease() {
  return{
      type: 'DECREASE'}
}