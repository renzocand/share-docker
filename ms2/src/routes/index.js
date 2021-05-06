const {Router} = require('express');
const axios = require('axios');
const router = Router();

router.get('/', (req,res)=>{
    const server = 'localhost';
    const url ='http://'+ server;

    return axios.get(url)
    .then(response => {
        return res.json({
            ubicacion:'ms2',
            mensaje: response
        }) 
    })
    .catch(error => {
        return res.json({
            ubicacion:'ms2',
            mensaje: error
        }) 
    });
   
})


module.exports = router;