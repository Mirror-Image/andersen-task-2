const test = localStorage.getItem('lastSession');


const initialState = JSON.parse(test) || {
  player1: {name: '', symbolX: false, score: 0},
  player2: {name: '', symbolX: false, score: 0},
  settings: {
    menuMusic: true
  }
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD NAME':
      return {
        ...state,
        ...action.item
      }

    case 'ADD SYMBOL':
      return {
        ...state,
        ...action.item
      }

    case 'TOGGLE_MENU_MUSIC':
      return {
        ...state,
        settings: {menuMusic: !state.settings.menuMusic}
      }

    case 'ADD_COUNT':
      return {
        ...state,
        ...action.item
      }

    default:
      return state
  }
}
