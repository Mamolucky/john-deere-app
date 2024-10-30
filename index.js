const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

console.log('Iniciando la aplicación...');

app.use(bodyParser.json());

// Ruta para realizar solicitudes al portal DealerPath
app.get('/dealerpath', async (req, res) => {
    try {
        const response = await axios.get('https://dealerpath.deere.com/wps/myportal/dpath/Home/R2ESHome/DealerPath/!ut/p/z1/lZBBD4IwDIV_DVdagRj0xjgQvCAYBXcxoBMwsJFt-vsl6kGjmdpb2--9lxYoFEB5eWnrUreCl93Yb-l0Fyfo4SzEJIpCD9NNQFbxJMUwcyC_AfhSAZLMIS5ilDhA_9c_O_2mNwDUbJ8DNUYQ9wGYTvwWsgBad6K6_zPglevXQCU7MsmkfZbjuNF6UHMLLVRK2CfR8AMbt_Ze9BZ-UjVCaSjeYBj69brAdtnnvroCi4WL6g!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error al acceder al portal DealerPath');
    }
});

// Ruta para entrenamiento
app.post('/train', (req, res) => {
    const trainingData = req.body;
    console.log('Datos de entrenamiento recibidos:', trainingData);
    // Aquí puedes procesar y almacenar los datos de entrenamiento
    res.send('Datos de entrenamiento recibidos y procesados');
});

// Ruta para feedback
app.post('/feedback', (req, res) => {
    const feedback = req.body;
    console.log('Feedback recibido:', feedback);
    // Aquí puedes procesar y almacenar el feedback
    res.send('Feedback recibido y procesado');
});

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la aplicación John Deere!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
