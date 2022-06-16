class Hello{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    
    hello(){
        console.log("Sum of arguments are : "+(this.num1+this.num2));
    }
}

var hey=new Hello(300,600)
hey.hello()