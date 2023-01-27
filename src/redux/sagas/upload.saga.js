import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//getting images by id from cloudinary
function* fetchUploads() {
    try {
        const images = yield axios.get('/api/upload')
        // yield put({ type: 'SET_UPLOADS', payload: images});
        console.log('images from cloudinary: ', images);
    } catch(err) {
        console.log('Error GETting teams: ', err);
    }
}

// const loadImages = async (event) => {
//     try {
//         const res = await fetch('/api/images')
//         const data = await res.json();
//         setImageIds(data)
//         console.log('data coming back', data);
//     } catch (error) {
//         console.log('error in get images', error);        
//     }
// }

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
    yield takeLatest('FETCH_UPLOADS', fetchUploads);
}

export default uploadSaga;