function calculateBmi(){
    const name = document.getElementById("name");
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const result = document.querySelector("#result")
    

    const weight = parseFloat(weightVal .value);
    const height = parseFloat(heightVal .value);

    let bmi = (weight / ( height * height)).toFixed(2);

   // result.innerHTML =  `${name.value} 's Bmi is ${bmi}`;
   if ( bmi <= 14 ){
       result.innerHTML = `${name.value} 's Bmi is ${bmi} <br/> You are slow`
       result.className = "orange"
   }
   else if (24>bmi && bmi>15){
       result.className = "green"
       result.innerHTML = `${name.value} 's Bmi is ${bmi}<br/>You are normal`
   }
   else{
    result.className = "red"

       result.innerHTML = `${name.value} 's Bmi is ${bmi}<br/>You are underweight`
   }

}
































// function calculateBmi(a,b){
//     console.log(a +b );
// }
// function calculateBmi(name,weight, height){
//     let bmi = weight / (height*height);
//     console.log(name + "'s BMI is" +bmi)
// }
//  calculateBmi( "usmon",80, 1.8 );
//  calculateBmi( "umar",80, 1.8 );
//  calculateBmi( "ali",80, 1.0);
//  calculateBmi( "yusuf",70, 1. );
//  calculateBmi( "usmon",80, 1.6 );
// // DOM - document object module
// console.log(document)
// const p = document.getElementById("p1");
// const button = document.querySelector("#click");
// const input = document.querySelector(".myinput");
// console.log(input.value)
// p.innerHTML = "<span class=' somthing'> salom</sapn>";
// console.log(p.textContent)
// p.className = "new-class"
// console.log(p)
// console.log(input);
// console.log(button);