let arr =[1,4,6,3,2,5,5];

//normal function

let print = function (el) {
    console.log(el);
}
arr.forEach(print);



//arrow function

arr.forEach((el)  => {
    console.log(el);
});

// arrays object function
let students = [{
    name:"bubu",
    marks:98
},
{
    name:"dudu",
    marks:88
}
];

students.forEach((student) => {
    console.log(student .name);
});
let gpa = students.map((el) => {
    return el.marks/ 10;
})



//map

let num =[1,2,4,7,5];
let  double = num.map((el) => {
    console.log(el*2);
});




//filter

let nos =[1,5,7,8,3,7];
let even = nos.filter((el) => {
    return el%2 == 0;               //even true and flse if not
})



//every

// [2,4,2,6].every((el) => el%2 == 0);


//reduce
let no = [1,2,4,5,6];
let finalValue = no.reduce ((res,el) =>  {
    console.log(res);
    return res + el;


} );
console.log(finalValue);


//find maxium

let arrayy=[2,4,5,6,9];
let max = -1;
 for(let i =0;i<arrayy.length;i++) {
    if(max < arrayy[i]) {
        max =arrayy[i];
    }
}
console.log(max);
 let maxium = arrayy.reduce((max,el) => {
    if( el > max ) {
        return el;
    }
    else {
        return max;
    }
});
