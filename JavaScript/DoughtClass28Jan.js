function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.eat = function(){
    console.log(`{this.name} is eating`)
}
Person.prototype.sleep = function(){
    console.log(`{this.name} is sleeping`)
}
const PersonOne = new Person("Aditiya",27);
persenOne.eat();