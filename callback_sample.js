/*Prgm for calculate execution time*/

var current=new Date()
console.log("Loop Start");

for(i=0;i<=1000;i++){
    console.log("Loop");
}

console.log("End of Loop");
var newDate=new Date()-current
console.log(newDate);


/*Prgm for Synchronous method */
function longprgm(millisec) {
    var current=new Date()
    while ((new Date()-current)<=millisec) {
        
    }
}

console.log("Started");
longprgm(2000)
console.log("Ended");

console.log("Started");
longprgm(2000)
console.log("Ended");

console.log("Started");
longprgm(2000)
console.log("Ended");



/*Prgm for Asynchronous method */
function longprgm(millisec) {
    var current=new Date()
    while ((new Date()-current)<=millisec) {
        
    }
}

function endfn() {
    console.log("Ended");
}

console.log("Started");
setTimeout(endfn,2000)

console.log("Started");
setTimeout(endfn,2000)

console.log("Started");
setTimeout(endfn,2000)


/*callback example*/

var hello=function(data){
    console.log("Data : "+data);
}

var hey=function(callback){
    callback("Mr Coders")
}

hey(hello)