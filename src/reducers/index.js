import { combineReducers } from "redux"
import * as actions from "../actions"

function imagesReducer(state = { images: [] }, action) {
  switch (action.type) {
    case actions.Types.IMAGES_RECEIVED:
      return { ...state, images: action.images }
    case actions.Types.LOAD_IMAGES_FAILURE:
      return state
    case actions.Types.SELECT_IMAGE:
      return { ...state, selectedImage: action.image }
    default:
      return state
  }
}

export default combineReducers({
  imageState: imagesReducer,
})
