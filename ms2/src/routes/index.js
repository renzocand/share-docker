const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.get('/', async (req, res) => {
    const server = 'ms1-service';
    const url = 'http://' + server;
    try {
        let respuesta = await axios.get(url);
        return res.json({
            ubicacion: 'ms2',
            mensaje: respuesta.data
        })

    } catch (error) {
        return res.json({
            ubicacion: 'ms2',
            mensaje: error
        })
    }
})

module.exports = router;