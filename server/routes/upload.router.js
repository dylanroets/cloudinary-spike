const express = require('express');
const pool = require('../modules/pool');
const { cloudinary } = require('../utils/cloudinary');
const router = express.Router();


/**
 * GET route (not sure if we need this yet)
 */
router.get('/', (req, res) => {
    // GET route code here
});

/**
   * POST route template
   */
router.post('/', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr, {
            upload_preset: 'spike_setups'
        })
        console.log('working and uploadedResponse: ', uploadedResponse);
        res.json({msg: "HOORAY I DID IT" })
    } catch (error) {
        console.log('Error posting upload in server: ', error);
        res.status(500).json({err: 'something went wrong'})
    }

});

module.exports = router;
