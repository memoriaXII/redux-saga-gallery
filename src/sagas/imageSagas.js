import {
  takeEvery,
  takeLatest,
  take,
  call,
  fork,
  put,
} from "redux-saga/effects"
import { fetchImages } from "../api/flickr"
import * as actions from "../actions"

function* loadImages() {
  try {
    const images = yield call(fetchImages)
    yield put({ type: actions.Types.IMAGES_RECEIVED, images })
    yield put({ type: actions.Types.SELECT_IMAGE, image: images[0] })
  } catch (error) {
    yield put({ type: actions.Types.LOAD_IMAGES_FAILURE, error })
  }
}

//用來監測ActionCreator是否有發出我們想偵測的Action
function* watchLoadImages() {
  yield takeEvery(actions.Types.LOAD_IMAGES, loadImages)
  //這邊的loadimage from actions/index.js 設定的function 然後來呼叫
  // while (true) {
  //   // yield takeEvery("LOAD_IMAGES", loadImages) // 偵測是否有type為'LOAD_IMAGES'的action發出
  //   yield call(loadImages) //若有的話，則進行這行
  // }
}

const imageSagas = [fork(watchLoadImages)]
//但如果這樣寫就變成blocking的行為，即表示一次只能執行一次LOAD_IMAGES這個workflow，
// 如果寫成fork就可以同時執行這workflow。接著就會執行loadImages這個GF

export default imageSagas
