//ES6 (free
//form) Practice

//Template Literal - Strings
let fName = "Logan";
let lName = "Kelly";

document.write(`${fName} ${lName}<br />`);

for (let bing of fName) {
    document.write(`${bing}</br />`);
}

document.write("Hello ".repeat(3) + "<br />");

document.write(fName.startsWith("Log") + "<br />");

document.write(fName.endsWith("an") + "<br />");

document.write(lName.includes("Belly") + "<br />");

let multi = "This is \
a multiline \
string";

let line = `This is 
a multi line 
string`

document.write(multi + "<br />");
document.write(line + "<br />");


//Template Literals - Numbers
let num1 = 10;
let num2 = 5;

document.write(`10 * 5 = ${num1 * num2}<br />`);

//tag template literals
function doMath(strings, ...values) {
    if (strings[0] == 'Pizza') {
        document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]}<br />`);
    } else if (strings[0] === 'Sub') {
        document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]}<br />`);
    }
}

doMath `Pizza${10} ${15}`;
doMath `Sub${100} ${45}`;

let getSum = (num1 = 1, num2 = 1) => { document.write(`${num1} + ${num2} = ${num1 + num2}<br />`) };
getSum(3, 5);

function getSumMore(...vals) {
    let sum = 0;
    for (let i = 0, len = vals.length; i < len; i++) {
        sum += vals[i];
    }
    document.write(`The sum is ${sum}<br />`);
}

getSumMore(1, 2, 3, 4);

let vals = [5, 26, 33, 54, 15];

getSumMore(...vals);

let difference = (num1, num2) => num1 - num2;
document.write(`5 - 10 = ${difference(5, 10)}<br />`);

let mult = (num1, num2) => {
    let product = num1 * num2;
    document.write(`${num1} * ${num2} = ${product}<br />`);
}

mult(6, 9);

valArr = [3, 5, 6, 7, 8, 11, 14];

let sumVals = valArr.reduce((a, b) => a + b);

document.write(`sum : ${sumVals}<br />`);

let evens = valArr.filter(v => v % 2 == 0);
document.write(`Evens : ${evens}<br />`);


let doubles = valArr.map(v => v * 2);
document.write(`Doubles : ${doubles}<br />`);


//Object Literals
function createAnimal(name, owner) {
    return {
        name,
        owner,
        getInfo() {
            return `${this.name} is owned by ${this.owner}`
        },
        address: {
            street: '123 Main',
            city: 'Pittsburgh'
        }
    };
}

var logan = createAnimal("Logan", "Ben Bizzey");

document.write(`${logan.getInfo()}<br />`);

document.write(`${Object.getOwnPropertyNames(logan).join("<br /> ")}<br />`);


//(object madness)
let { name, owner } = logan;
document.write(`Name : ${name} Owner : ${owner}<br />`);

let { address } = logan;
document.write(`Address : ${address.street}, ${address.city}<br />`);


//(array madness)
let favNums = [420, 69, 666];

let [, , devil] = favNums;
document.write(`Devil : ${devil}<br />`);

let [, ...last2] = favNums;
document.write(`2nd Num : ${last2[0]}<br />`);

let val1 = 1,
    val2 = 2;
[val1, val2] = [val2, val1];
document.write(`Val2 : ${val2}<br />`);


//Classes
class Mammal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    static makeMammal(name) {
        return new Mammal(name);
    }

    getInfo() {
        return `${this.name} is a mammal`;
    }
}

let monkey = new Mammal("Dan Z");

document.write(`Mammal : ${monkey.name}<br />`);
document.write(monkey.getInfo());

let gorilla = Mammal.makeMammal("Logan");

document.write(`<br />` + gorilla.getInfo() + `<br />`);

//subclasses
class Marsupial extends Mammal {
    constructor(name, hasPouch) {
        super(name);
        this._hasPouch = hasPouch;
    }

    get hasPouch() {
        return this._hasPouch;
    }

    set hasPouch(hasPouch) {
        this._hasPouch = hasPouch;
    }

    getInfo() {
        return `${this.name} is a marsupial`;
    }

}

let kangaroo = new Marsupial("Y Paul", true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch<br />`);

document.write(`${gorilla.getInfo()}<br />`);
document.write(`${kangaroo.getInfo()}<br />`);

function getClass(classType) {
    if (classType == 1) {
        return Mammal;
    } else {
        return Marsupial
    }

}

class Koala extends getClass(2) {
    constructor(name) {
        super(name);
    }
}

let carl = new Koala("Carl");

document.write(`${carl.getInfo()}<br />`);
//end Classes


//Symbols
let capital = Symbol("State capital");

let Minnesota = {};
Minnesota[capital] = "St. PAUL";
document.write(`Capital of MN : ${Minnesota[capital]}<br />`);

document.write(`Symbol Capital : ${capital.toString()}<br />`);

let employNum = Symbol.for("Employee Number");

let benBizzey = {};
benBizzey[employNum] = 10;

let benBetter = {};
benBetter[employNum] = 11;

document.write(`Ben Bizzey Employee Number: ${benBizzey[employNum]}<br />`);
document.write(`Ben Better Employee Number: ${benBetter[employNum]}<br />`);
//end Symbols


//Arrays
let array1 = Array.of(5, 6, 7);

let array2 = Array.from(" Little Bits ");

let array3 = Array.from(array1, (value) => value * 2);

for (let val of array1) document.write(`Array Val : ${val}<br />`);
for (let val of array2) document.write(`Array Val : ${val}<br />`);
for (let val of array3) document.write(`Array Val : ${val}<br />`);
//end Arrays


//Sets
let randSet = new Set();

randSet.add(10);
randSet.add(33);
randSet.add("Words");

document.write(`Has 10 : ${randSet.has(10)}<br />`);
document.write(`Has \"Words\" : ${randSet.has("Words")}<br />`);

document.write(`Set Size : ${randSet.size}<br />`);

randSet.delete(10);

if (randSet.has(10)) {
    document.write(`Delete didn't work, 10 : ${randSet.has(10)}<br />`);
} else {
    document.write(`Deletion worked, 10 : ${randSet.has(10)}<br />`);
}

for (let val of randSet) document.write(`Set Val : ${val}<br />`);
//end Sets

//Maps
var randMap = new Map();
randMap.set("key1", "Grandma String");
randMap.set("key2", 666);

document.write(`<br />key1 : ${randMap.get("key1")}<br />`);
document.write(`key2 : ${randMap.get("key2")}<br />`);

document.write(`Map Size : ${randMap.size}<br />`);

randMap.forEach(function(value, key) {
    document.write(`${key} : ${value}<br />`);
});
//end Maps


//Promises!!!



let randVal = 16;

var p3 = new Promise(function(resolve, reject) {
    if (randVal == 18) {
        resolve("Good Value");
    } else {
        reject("Bad Value");
    }
});

p3.then((val) => document.write(`${val}<br />`), (err) => document.write(`${err}<br />`));

p4 = new Promise((resolve, reject) => {
    if (randVal <= 17) {
        throw new Error("Can't vote");
    } else {
        resolve("Can Vote");
    }
});

p4.then((val) => document.write(`${val}<br />`))
    .catch((err) => document.write(`${err.message}<br />`));

var p1 = Promise.resolve("Resolve This Promise Bromise!");

p1.then((res) => document.write(`${res}<br />`));

var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Mister, won\'t you please help my pony?"), 15000);
});

p2.then((res) => document.write(`${res}<br />`));