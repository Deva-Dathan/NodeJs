function person(name,age,place) {
    this.name=name
    this.age=age
    this.place=place
    this.display=function() {
        console.log("Name : "+this.name+" Age : "+this.age);
    }
}

var Devan = new person("Devan",22,"Kottarakkara")
var Jith = new person("Jith",20,"Kollam")

Devan.display()
Jith.display()