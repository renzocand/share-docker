const {Router} = require('express');
const axios = require('axios');
const router = Router();

router.get('/', (req,res)=>{
    const server = 'ms1';
    const url ='http://'+ server;

    axios.get('url')
    .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
    })
    .catch(error => {
    console.log(error);
    });

    return res.json({
        ubicacion:'ms2',
    })
})


module.exports = router;