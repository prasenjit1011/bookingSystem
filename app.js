console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();



app.use('/', (req, res, next)=>{

    let arr = [];
    for(let i = 0; i<3; i++){
        for(let j = 0; j<9; j++){
            arr[i][j] = rand(0,9);
        }
    }
    console.log(arr);

    console.log('-: Welcome :-');
    res.render('onito', {data:arr});
    next();
});

console.log('-: App Running :-');
app.listen(3000);