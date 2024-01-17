console.log('\n\n-: App Started :-');

const { count } = require('console');
const express   = require('express');
const app       = express();

app.set('view engine', 'ejs');
app.set('views', 'views');




app.post('/', (req, res, next)=>{
    res.render('onito', {data:numberArr});
    next();
});


app.get('/', (req, res, next)=>{


    //console.clear();
    console.log('---------------------------------------------------------');
    var arr1 = ["a","b","c"];
    var arr2 = ["a","b", "c"];

    const isTrue = (arr1, arr2) => {
        if (arr1.every((u, i) => u === arr2[i] )){
            return true;
        }else{
            return false;
        }
    }
    //console.log(isTrue(arr1, arr2));









    let number      = 0;
    let arr         = [];
    let numberArr   = [];
    let nonZeroCnt  = 5;
    let zeroCnt     = 4;

    let x = 0;
    let y = 0;
    let i = 0
    let j = 0;
    let k = 0;
    let n = 1*6;

    let ticketNumber = [];

    while(n>0){
        n--;
        console.log('---------------------------------------------------', n)
        ticketNumber = [];
        for(x = 0; x<3; ){
            arr = [];
            i = 0;//nonZeroCnt;
            j = 0;//zeroCnt;
            for(y = 0; y<9; y++){

                while(1){
                    random  = Math.random();
                    number  = parseInt(10*(y+1)*random);
                    if(10*y > number || number > 10*(y+1)){
                        continue;
                    }
                    
                    if(random < 0.09){
                        continue;
                    }

                    if(ticketNumber.indexOf(number) > -1){
                        continue;
                    }

                    if(i<5 && j<4){
                        if(number%2){
                            i++;
                            arr.push(number);
                            ticketNumber.push(number);
                        }
                        else{
                            j++;
                            arr.push(0);
                        }
                    }
                    else{
                        if(j == 4){
                            arr.push(number);
                            ticketNumber.push(number);
                        }
                        else{
                            arr.push(0);
                        }
                    }
                    break;
                }

            }

            arrStatus = true;
            numberArr.map((arr2, index)=>{
                if(arrStatus && isTrue(arr, arr2)){
                    arrStatus = false;
                }
            });

            if(arrStatus){
                x++;
                numberArr.push(arr);
            }
        }
    }



    let xyz = numberArr[1][1];
    console.log(Array.isArray(xyz));

    console.log(numberArr.length, numberArr[1]);

    console.log('->>>>>>>>>>>>>>>>>>>>>--');






    //res.send('-: Welcome :-');
    res.render('home', {data:numberArr});
    next();
});

console.log('-: App Running :-');
app.listen(3000);