//Option #1 to create an object
let person = new Object();

person.name = "Trevor";
person.major = "CIT";
person.gender = "m";
person.age = "22";
person.updateAge = function(){
    return ++person.age;
}
console.log(person.age);

document.getElementById("person").innerHTML = person.name + " " + person.major + " " + person.age;

//Option #2 to create an object

let person2 = {
    name: "Travis",
    major: "Rec Management",
    gender: "m",
    age: 24,
    updateAge: function(){
        return ++person2.age;
    }
}
document.getElementById("person2").innerHTML = person2.name + " " + person2.major + " " + person2.age;