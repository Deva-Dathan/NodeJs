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


promise.all([getName(),getMobile()]).then((dis)=>{
    console.log(dis);
})