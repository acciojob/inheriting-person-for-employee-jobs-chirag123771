// complete this js code
function Person(name, age) {this.name = name;
  this.age = age;}

function Employee(name, age, jobTitle) {Person.call(this, name, age);
  this.jobTitle = jobTitle;
									   }
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
