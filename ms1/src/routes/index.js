const {Router} = require('express');
const router = Router();

const json_prueba = [
    {
        color:'rojo',
        numero:'5'
    },
    {
        color:'azul',
        numero:'7'
    },
]

router.get('/', (req,res)=>{
    return res.json({
        ubicacion:'ms1',
        mensaje: json_prueba
    })
})


module.exports = router;