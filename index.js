require('./config/conexion');
const express = require('express')
const port = (process.env.PORT || 3000)

// express
const app = express()

//admitir
app.use(express.json())

//configurar
app.set('port',port)

//rutas
app.use('/api', require('./rutas'))


//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('servidor iniciado en el prueto: '+port)
    }
})
/*
Username:	utzvfzx64qwck7sx6h7k
Password:	pscale_pw_BXwq1MVqxXi2OLX7U7YnceWTOPM3SVIwhmGr8PRi1hd */
