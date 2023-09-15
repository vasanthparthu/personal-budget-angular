const express=require('express');
const app=express();
const port=3000;

app.use('/', express.static('public'));




app.get('/', (req,res) => {
    res.send('Hello world');
    });
    app.get('/budget', (req, res) => {
        res.sendFile("C:\\Users\\VASANTH\\Desktop\\NBAD\\personal-budget\\personal-budget.json");
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

