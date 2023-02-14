const mysql = require('mysql');

/*const conexion = mysql.createConnection({
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

module.exports=conexion*/
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
    "madre_perro":"madre1",
    "estado_perro":"En Celo"   }

    */

    const conexion = mysql.createConnection({
        host: 'aws-sa-east-1.connect.psdb.cloud',
        user: 'utzvfzx64qwck7sx6h7k',
        password: 'pscale_pw_BXwq1MVqxXi2OLX7U7YnceWTOPM3SVIwhmGr8PRi1hd',
        port:'3306',
        database: 'perros_db',
        ssl:true
    });
    
    conexion.connect((err)=>{
        if(err){
            console.log('ha ocurrido un error :'+ err)
        }
        else
        {console.log(' la base de datos se conecto!!!')}
    });
    
    module.exports=conexion