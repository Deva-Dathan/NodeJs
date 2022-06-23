/* Build a prgm for adding 2 number,then multiply the sum and divide the product with 10 Using callback function*/

function add(num1,num2,callback)
{
    let err=false
    if(num1==0){
        err=true
    }
    callback(num1+num2,err)
}
function multiply(num1,num2,callback){
    callback(num1*num2)
}
function div(num1,num2,callback){
    callback(num1/num2)
}


const { resolve, reject } = require('promise')
// add(10,20,(sum,err)=>{
//     if(err){
//         console.log("Number is zero");
//     }else{
//         console.log("Sum Of Addition : "+sum);
//         multiply(sum,sum,(product)=>{
//             console.log("Product Of Multiplication : "+product)
//             div(product,10,(result)=>{
//                 console.log("Quotient Of Division : "+result);
//             })
//         })
//     }
// })



/* Build a prgm for adding 2 number,then multiply the sum and divide the product with 10 Using promise function*/

const promise=require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("ERROR")
        }
        resolve(num1+num2)
    })
}
function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1*num2)
    })
}
function div(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1/num2)
    })
}
add(10,20).then((sum)=>{
    console.log(sum);
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product);
    return div(product,10)
}).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})