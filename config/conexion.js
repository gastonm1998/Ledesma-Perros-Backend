const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port:'3306',
    database: 'db_perros'
});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error :'+ err)
    }
    else
    {console.log(' la base de datos se conecto!!!')}
});

module.exports=conexion
/*
{
    "nombre_perro":"prueba agregar",
    "fecha_nacimiento_perro":"9/9/8888",
    "lugar_nacimiento_perro":"post",
    "raza_perro":"salchicha",
    "color_perro":"negro",
    "sexo_perro":"macho",
    "pelaje_perro":"largo",
    "tatuaje_perro":"dssfd324432",
    "padre_perro":"padre1",
    "madre_perro":"madre1"}
    */