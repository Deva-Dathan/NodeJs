const { reject } = require('promise');
const promise=require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Deva");
        },3000)
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('12345');
        },2000)
    })
}


// promise.all([getName(),getMobile()]).then((dis)=>{
//     console.log(dis);
// })

async function getUser(){
    let name=await getName()
    console.log(name);
    let mobile=await getMobile()
    console.log(mobile);

}

getUser()