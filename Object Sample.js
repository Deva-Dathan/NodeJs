var person={name:"Devan",age:22,place:"kottarakkara",
display:function(){
    var name="dafja"
    console.log(name);
    console.log(this.name);
}}



person.dob="10-10-2000"

person.displayAge=function(){
    console.log(this.age);
}

person.displayAge();
