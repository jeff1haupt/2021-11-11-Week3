const student1 = {
    name: "Jeff Haupt",
    address: "1111 Spring St",
    gradeLevel: "Junior",
    phone: "555-555-5555",
    describe: function () {
        return this.name + " can be reached at " + this.phone; // 'this' means student1 
    }
}

const student2 = {
    name: "Taylor Nieman",
    address: "123 Street Dr.",
    gradeLevel: "Senior",
    phone: "555-555-1212",
    describe: function() {
        return this.name + " can be reached at " + this.phone; // 'this' means student2 in this case
    }
}

// console.log(student1);
// console.log(student1.name);
// console.log(student1.phone);
console.log(student1.describe());
console.log(student2.describe());