require("dotenv").config();
// const errorService = require("./app/service/errorHandling");
const express = require('express');
const app = express();

/****************************/
/**** Swagger generator  ****/
/****************************/
// const expressJSDocSwagger = require('express-jsdoc-swagger');

// const options = {
//     info: {
//         version: '1.0.0',
//         title: 'Cadex',
//         license: {
//             name: 'MIT',
//         },
//     },
//     // Chemin de la doc
//     swaggerUIPath: '/cadex-api',
//     security: {
//         BasicAuth: {
//             type: 'http',
//             scheme: 'basic',
//         },
//     },
//     baseDir: __dirname,
//     // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
//     filesPattern: './**/*.js',
// };

// expressJSDocSwagger(app)(options);

/********************************/
/**** Configuration express  ****/
/********************************/

app.use(express.static('public'));

app.use(express.json());

const router = require("./app/router");

app.use(router);
// // gestion de la 404
// app.use(errorService._404);

// // gestion globale des erreurs
// app.use(errorService.manage);

const PORT = process.env.PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});