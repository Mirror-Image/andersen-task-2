import {lastSessionData} from "../../helpers/LastSessionData";


const initialState = lastSessionData || {
  player1: {name: '', symbolX: false, score: 0},
  player2: {name: '', symbolX: false, score: 0},
  xIsNext: true,
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

    case 'RESET_GAME':
      return  {
        ...state,
        ...action.item
      }

    default:
      return state
  }
}
