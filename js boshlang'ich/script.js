// data types 
// string, number, boolen, undefined, object, array


// string
// const streetname = "presedentStreet";
// const  houseNumber = 157;
// const tenant = "John Doe";
// console.log(`${tenant} lives in ${streetname} at house number ${houseNumber }`)
// console.log(tenant.toLocaleUpperCase())
// console.log(tenant.toLocaleLowerCase())

// .toLocaleUpperCase() (for grand ) Katta harf uchun 
// .toLocaleLowerCase() (for child ) mayda harf uchun
// hozircha hu js darslari 


// Oddiy brojetcha pastdagi

//         function calculate (){
//             const a = document.getElementById("raqam")
//             let y = document.querySelector("#y")
//             const c = parseFloat(a .value)
//             const b = (c*2)
//             y.innerHTML = (`2 ga ko'paytirgandagi natija ${b} ga teng`)
//             console.log(b)
// }







// const cars = [ "AUDI", "BMW", "TESLA" ];

// console.log(cars)

// cars.unshift("TOYOTA")

// console.log(cars)
// object
// const person = {
//     name: "Abdullajon",
//     isStudent: true,
//     age: 14,
//     adress: {
//         street: "Main st", 
//         housenumber: 123
//     }
// }

// console.log(person.name, person.adress.street);
// const  { name1, age, isStudent, housenumber, adress: { street } } = person;
// console.log(name1)
// console.log(street)
// console.log(person)
// console.log(JSON.stringify(person))

//array bilan ishlash
// const students = [
//     {
//         fname: "John Doe",
//         age: 23,
//         gradiated: true
//     },

//     {
//         fname: "Bob mark",
//         age: 21,
//         gradiated: true,
//     },

//     {
//         fname: "Mark Smith",
//         age: 34,
//         gradiated: false,
//     }
// ]

//  for ( let i = 0; i < students.length ; i++) {
//      console.log(i);
//      console.log(students[i].fname);
//  }

//array functions
 //forEach, splise, slice, filter, map

//  const gradiated = students.filter (student  => {
//      return student.gradiated === true;

//  }).map(s => {
//      return s.fname

//  })
 
//  console.log(gradiated);
//  console.log(students)


 // const score = 91;
// if ( score >= 90 ){
//     console.log("You got A");
// }else if ( score < 90 && score >= 80 ){
//     console.log("You Got B")
// }else if ( score < 80 && score >= 70 ){
//     console.log("You Got C")
// }else if ( score < 70 && score >= 60 ){
//     console.log("You Got D")
// }else{
//     console.log("You failed")
// }
// if ( score > 50 || score < 90 ){
//     console.log("True")
// }
// else{
//     console.log("false")
// }



// if elseni qisqartitilgan varianti pastdagi
    // const score = 62;
    // const result = score > 70 ? "A" : "B"
    // console.log(result)

// funksiyani ni hisoblash
// function great (time){
//     switch(time){
//         case "Morning":
//         console.log("Good Morning");
//             break;
//         case "Afternoon":
//             console.log("Good Afternooon")
//             break;
//         case "Evning":
//         console.log("Good Evning");
//             break;
        
        
            
//         }

//     }

// great("Evning")

// function addNum (num1, num2, ) {
//     console.log(num1 + num2)
// }
// addNum( 12, 33);
// addNum( 1212, 33);
// addNum( 12, 323);

// const multiplNums = (n1, n2) => {
//     console.log(n1,n2)
// }
// multiplNums(12,33)



