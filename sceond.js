//Q1

let arr =[10,50,30,60,200];
let res = arr.every ((el) => el%10 == 0);


//Q2
function getMinmum(nums) {
    let min = nums.reduce((min,el) => {
        if(el< min) {
            return el;
        }
        else {
            return min;
        }
    });

    return min;
}

let nums=[1,4,6,2,7,9,5];

//default parameters
function sum (a=4,b=9) {
    return a+b;
}

//spraed literals with array

let arrey =[1,5,2,8,7,3];
let obj ={...arrey };
let newArray  =[...arrey];
console.log(newArray);

let odd=[1,3,5,9];
let even=[2,4,6,8,10];
let num =[...odd, ...even];

//spread object literals
let data = {
    email:"bubu@dudu.com",
    password:143
};
let dataCopy = {...data, id:123 };


//rest
function add( ...args) {
    for (let i =0; i< args.length; i++) {
        console.log("u gave us:", args[i]);
    }
}


function minn() {
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1);      //push is method of array but  here it is a collection
}

function sumof(...args) {
    return args.reduce((res,el) => res + el)
};

//destructuring

let names=["bubu","dudu","mama","kanhu"];
    // let winner = names[0];
    // let runnerup= names[3];
    // let second = names[2];



let [winner, runnerup, second, ...others] = names;

//destructuring object

const student = {
    name:"mama",
    age:23,
    sub:["eng","sci","math"]
};
let {name:nme, age:years,city:place = "bbsr"} = student;
