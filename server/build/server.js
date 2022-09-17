import express from 'express';
const app = express();
app.get('/ads', (require, response) => {
    return response.json([
        { id: 1, name: 'anuncio 1' },
        { id: 2, name: 'anuncio 2' },
    ]);
});
app.listen(3333);
