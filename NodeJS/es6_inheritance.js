class Sample{
    samplehello(){
        var n1=45
        var n2=55
        console.log("Result : "+(n1+n2));
    }
}

class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    
    hello(){
        console.log("Sum of arguments are : "+(this.num1+this.num2));
    }
}

var hey=new Hello(300,600)
hey.hello()
hey.samplehello()
