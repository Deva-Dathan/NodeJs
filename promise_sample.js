/* Build a prgm for adding 2 number,then multiply the sum and divide the product with 10 */

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

add(10,20,(sum,err)=>{
    if(err){
        console.log("Number is zero");
    }else{
        console.log("Sum Of Addition : "+sum);
        multiply(sum,sum,(product)=>{
            console.log("Product Of Multiplication : "+product)
            div(product,10,(result)=>{
                console.log("Quotient Of Division : "+result);
            })
        })
    }
})