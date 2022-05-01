// Let Var, Const
function SampleVar() {
  var x = 5;
  if(x % 2 === 1) {
    var x = 100;
  }
  console.log(x);
}

function SampleLet() {
  const x = 5;
  if(x % 2 === 1) {
    x = 100;
  }
  console.log(x);
}

// Normal Func
function SampleVar() {

}

const FUNCArr = () => {
  return true;
}


// IIFE
const func = function () {
 return "Something";
} ();

// console.log(func);



// const person = {
//   id: '21',
//   sleep: function () {
//     console.log("Sleeping");
//   },
//   talk() {
//     console.log("Talking");
//   },
//   role: 'Developer',
//   age: 50,
//   display: function () {
//     console.log(this);
//   }
// }
// person.display();
// // const customDisplay = person.display;

// // const newCustomDisplay = person.display.bind(person);

// // customDisplay();
// // newCustomDisplay();


function Sample (a, b) {

  this.a = a;
  this.b = b;

  return a + b;
}

const NewObj = new Sample(5, 10);

// console.log(NewObj);

// console.log(Sample(5, 10));

const SampleFunc = (a, b) => {
  console.log(this);
  return a + b;
}

// console.log(SampleFunc(5, 10));

// const ArrFunc = new SampleFunc(5, 10);


// filter, map, foreach, reduce


const Elements = [
  {
    id: 1,
    isActive: true,
    age: 23,
  },
  {
    id: 2,
    isActive: false,
    age: 32,
  },
  {
    id: 3,
    isActive: true,
    age: 28,
  }
];

// Filter all active users
const ActiveElements = Elements.filter(({ isActive }) => isActive );
// console.log(ActiveElements);


// Filter all user whose age is less than 30
const OldEles = Elements.filter(({ age }) => age);
// console.log(OldEles);


function SomeFunc(ele, i) {

}

// Map ---> Return new array with each returned elements
const NewElements = Elements.map((ele, z, x) => {
  // console.log(z);
  // console.log(x);
  return ele.id;
});

// console.log(NewElements);

// Foreach ---> Just executes a set of statement return type: undefined
const NewElementsTwo = Elements.forEach(({ id }, i, x) => {
  // console.log(z);
  // console.log(x);
  return id;
});

// console.log(NewElementsTwo);


// const ar1 = 1;

// const arr = [1, 2, 3, 4, 5];
// arr[0] = 20;
// console.log(arr)


// const obj = {
//   id: 1,
//   name: "Sanjay"
// }
// obj.name = "Saravanan";
// console.log(obj);


// const funcSome = (arrs) => { // ([1, 2, 3, 4, 5])
//   arrs[3] = 999;
//   console.log("Arrs", arrs)
// }

// const funcObj = (objs) => {
//   objs.name = "Sammy";
//   console.log(objs);
// }

// funcSome([...arr]);
// funcObj({...obj});

// console.log(arr);
// console.log(obj);


const person = {
  id: '21',
  sleep: function () {
    console.log("Sleeping");
  },
  talk() {
    console.log("Talking");
  },
  role: 'Developer',
  age: 50,
  display: function () {
    console.log(this);
  },
  bio: {
    edu: "BE",
    score: 70,
    id: '24',
    age: 25,
  },
  scores: [
    {
      id: 1,
      sub: "Maths",
      score: 99,
    },
    {
      id: 2,
      sub: "Eng",
      score: 63,
    }
  ],
}

const arr = [1, 2, 3, 4];
const newArr = [  4, 5, 6, 7, 8, 9, ...arr, ];
// console.log(newArr);

const newObj = { ...person, role: "Teacher", hobbies: ['cricket', 'movies'] };
// console.log(newObj);


// const [ a, d, z, ...x ] = arr;

// console.log(a, d, x);

// const { role, ...remainProps } = person;

// console.log(role, remainProps);


// Sum of All Elements in arr accu = 5, currVal = 1
const sumArr = arr.reduce((accu, currVal) => {
  console.log("Accu", accu);
  console.log("Curr", currVal);
  return accu + currVal;
}, 5);


console.log(sumArr);





