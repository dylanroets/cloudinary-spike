import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


// uploading image
function* postUploadImage(action){
    console.log('Saga postUploadImage: ', action.payload);
    try {
        yield axios.post('/api/upload', action.payload)
    } catch (err) {
        console.log('Error POSTing Upload Image: ', err);
    }
}

// function* addTeam(action) {
//     try {
//         yield axios.post('/api/teams', action.payload)
//         yield put({ type: 'FETCH_TEAMS' });
//     } catch (err) {
//         console.log('Error POSTing team: ', err);
//     }
// }

function* uploadSaga() {
    yield takeLatest('UPLOAD_IMAGE', postUploadImage);
}

export default uploadSaga;