import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function FilesUploadComponent() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);



    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmitFile = (event) => {
        console.log('submitting');
        event.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile);
    }

    const uploadImage = (base64EncodedImage) => {
        console.log('base64EncodedImage: ', base64EncodedImage);
        dispatch({
            type: 'UPLOAD_IMAGE',
            payload: {data: base64EncodedImage}
        });
    }

    // GETting image ids from cloudinary and displaying to dom
    const [imageIds, setImageIds] = useState();

    // const loadImages = (event) => {
    //     dispatch({ type: 'FETCH_UPLOADS' })
    // }
    useEffect(()=> {
        dispatch({ type: 'FETCH_UPLOADS' });
    }, [])

return (
    <>
        <h2>React File Upload Demo</h2>
        <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmitFile}>
                        <h3>React File Upload</h3>
                            <input type="file" name='image' onChange={handleFileInputChange} value={fileInputState} className="form-input"/>
                            <button className="btn btn-primary" type="submit">Upload</button>
                    </form>
                    {previewSource && (
                        <img src={previewSource} alt="chosen" style={{height: '300px'}}/>
                    )}
                </div>
        </div>
    </>
)
}


export default FilesUploadComponent;