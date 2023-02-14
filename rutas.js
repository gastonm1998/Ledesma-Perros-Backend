/*const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from tb_perros'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

// get un equipo
router.get('/:nombre_perro',(req, res)=>{
    const {nombre_perro} = req.params
    let sql ='select * from tb_perros where nombre_perro = ?'
    conexion.query(sql,[nombre_perro],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
    const{nombre_perro,fecha_nacimiento_perro,lugar_nacimiento_perro,raza_perro,color_perro,sexo_perro,pelaje_perro,tatuaje_perro,padre_perro,madre_perro,estado_perro} = req.body

    let sql = `insert into tb_perros(nombre_perro, fecha_nacimiento_perro,lugar_nacimiento_perro,raza_perro,color_perro,sexo_perro,pelaje_perro,tatuaje_perro,padre_perro,madre_perro,estado_perro) values('${nombre_perro}','${fecha_nacimiento_perro}','${lugar_nacimiento_perro}','${raza_perro}','${color_perro}','${sexo_perro}','${pelaje_perro}','${tatuaje_perro}','${padre_perro}','${madre_perro}','${estado_perro}')`

    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from tb_perros where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre_perro,fecha_nacimiento_perro,lugar_nacimiento_perro,raza_perro,color_perro,sexo_perro,pelaje_perro,tatuaje_perro,padre_perro,madre_perro,estado_perro} = req.body

    let sql = `update tb_perros set 
        nombre_perro ='${nombre_perro}',
        fecha_nacimiento_perro='${fecha_nacimiento_perro}',
        lugar_nacimiento_perro ='${lugar_nacimiento_perro}',
        raza_perro ='${raza_perro}',
        color_perro ='${color_perro}',
        sexo_perro ='${sexo_perro}',
        pelaje_perro ='${pelaje_perro}',
        tatuaje_perro ='${tatuaje_perro}',
        padre_perro ='${padre_perro}',
        madre_perro ='${madre_perro}',
        estado_perro ='${estado_perro}'
                where id = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })

})
//----------------------------------



module.exports = router*/

const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from tb_perros_ps'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

// get un equipo
router.get('/:nombre_perro',(req, res)=>{
    const {nombre_perro} = req.params
    let sql ='select * from tb_perros_ps where nombre_perro = ?'
    conexion.query(sql,[nombre_perro],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
    const{nombre_perro,fecha_nacimiento_perro,lugar_nacimiento_perro,raza_perro,color_perro,sexo_perro,pelaje_perro,tatuaje_perro,padre_perro,madre_perro,estado_perro} = req.body

    let sql = `insert into tb_perros_ps(nombre_perro, fecha_nacimiento_perro,lugar_nacimiento_perro,raza_perro,color_perro,sexo_perro,pelaje_perro,tatuaje_perro,padre_perro,madre_perro,estado_perro) values('${nombre_perro}','${fecha_nacimiento_perro}','${lugar_nacimiento_perro}','${raza_perro}','${color_perro}','${sexo_perro}','${pelaje_perro}','${tatuaje_perro}','${padre_perro}','${madre_perro}','${estado_perro}')`

    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from tb_perros_ps where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre_perro,fecha_nacimiento_perro,lugar_nacimiento_perro,raza_perro,color_perro,sexo_perro,pelaje_perro,tatuaje_perro,padre_perro,madre_perro,estado_perro} = req.body

    let sql = `update tb_perros_ps set 
        nombre_perro ='${nombre_perro}',
        fecha_nacimiento_perro='${fecha_nacimiento_perro}',
        lugar_nacimiento_perro ='${lugar_nacimiento_perro}',
        raza_perro ='${raza_perro}',
        color_perro ='${color_perro}',
        sexo_perro ='${sexo_perro}',
        pelaje_perro ='${pelaje_perro}',
        tatuaje_perro ='${tatuaje_perro}',
        padre_perro ='${padre_perro}',
        madre_perro ='${madre_perro}',
        estado_perro ='${estado_perro}'
                where id = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })

})
//----------------------------------



module.exports = router