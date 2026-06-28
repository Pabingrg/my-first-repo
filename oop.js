// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    super(xp = 0, hourlyWage = 10) {
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.age += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    const internObject = new Worker("Bob", 21, 110, 0, 10);
    internObject.goToWork();
    return internObject;
}

// Task 4: Code a manager object, methods
function manager() {
    const managerObject = new Worker("Alice", 20, 120, 100, 30);
    managerObject.doSomethingFun();
    return managerObject;
}
