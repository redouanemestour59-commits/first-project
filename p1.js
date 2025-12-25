
document.getElementById("h1").textContent = "This is heading added by javascript";
document.getElementById("p1").innerHTML = "This is paragraph added by javascript";

//VARIABELS AND DATA TYPES
 let x,y,gmail,bol;
 bol=true;
 gmail=`redouanmestour59@gmail.com`
 y=`redouane`;
 x = 2756;
console.log(`${y} hav ${x} lik a cridit`);
console.log(`email of ${y} is ${gmail}`);
console.log(`my dissimilation is ${bol}`);
console.log(typeof x);
console.log(typeof y);
console.log(typeof bol);
document.getelementby

//ARITHMETIC OPERATORS
let a=10;
a=a+5; // a+=5;
a=a-3; // a-=3;
a=a*2; // a*=2;
a=a/4; // a/=4;
a=a**2; // a**=2;
a=a%8; // a%=8;
a++;
a--;
 

console.log(a);



document.getElementById("btn3").onclick=function(){
    let user = document.getElementById("input3").value;
    document.getElementById("h3").textContent=`hello MS ${user}`;
    document.getElementById("input3").value="";
}

//variable types
let v1= "hello var";//v1=1 , =  true, = "" 
let v2= "hello let";// v2=0 , = false, = null
let v3= "hello const";// v3= undefined , = hello, = ' '  

v1=Number(v1); //type conversion
v2=Boolean(v2); 
v3=String(v3); 

console.log( v1, typeof v1);
console.log( v2, typeof v2);
console.log( v3, typeof v3);

//constonts
const pi=3.14;
//pi=3.15; //error

//math in javascript
let x2 = 3;
let y2 = 2;
let z2 = 1;

//z2 = Math.round(x2);
//z2 = Math.floor(x2);
//z2 = Math.ceil(x2);
//z2 = Math.trunc(x2);
//z2 = Math.pow(x2, y2);
//z2 = Math.sqrt(x2);
//z2 = Math.log(x2);
//z2 = Math.sin(x2);
//z2 = Math.cos(x2);
//z2 = Math.tan(x2);
//z2 = Math.abs(x2);
//z2 = Math.sign(x2);
let max2 = Math.max(x2, y2, z2);
let min2 = Math.min(x2, y2, z2);

console.log(min2);


//random number
let r2 = Math.random();
r2 = r2 * 10; // to get number between 0 and 10
r2 = Math.floor(r2); // to get integer number
console.log(r2);
// let r2=Math.floor(Math.random()*10);


// if else
let age = 20;
if (age < 18) {
    console.log("you are minor");
} else if (age >= 18 && age < 65) {
    console.log("you are adult");
} else {
    console.log("you are senior");
}

//switch case

document.getElementById("btn4").onclick = function () {
    let day = document.getElementById("input4").value;

    switch (day) {
        case "1": document.getElementById("p4").textContent = "Monday"; break;
        case "2": document.getElementById("p4").textContent = "Tuesday"; break;
        case "3": document.getElementById("p4").textContent = "Wednesday"; break;
        case "4": document.getElementById("p4").textContent = "Thursday"; break;
        case "5": document.getElementById("p4").textContent = "Friday"; break;
        case "6": document.getElementById("p4").textContent = "Saturday"; break;
        case "7": document.getElementById("p4").textContent = "Sunday"; break;
        default: document.getElementById("p4").textContent = "Invalid day"; break;
    }
};

//strings methods
let str1 = " Hello World ";
console.log(str1.length); //13 
console.log(str1.trim()); //"Hello World"
console.log(str1.toUpperCase()); //" HELLO WORLD "
console.log(str1.toLowerCase()); //" hello world "
console.log(str1.indexOf("o")); //5
console.log(str1.slice(0,5)); //" Hell"
console.log(str1.replace("World", "JavaScript")); //" Hello JavaScript "


//prompt and alert
/*let r=window.prompt("enter your name:");
window.alert(`hello ${r}, welcome to our website!`);*/

//logical operators  (&&, ||, !)
let age2 = 25;
let hasID = true;      
if (age2 < 18 || !hasID) {
    console.log("you cannot enter the club");
} else {
    console.log("you can enter the club");
}



//=== vs ==
let c1 = 5;      //number
let c2 = "5";    //string   
if (c1 === c2) {
    console.log("c1 is equal to c2");
} else {
    console.log("c1 is not equal to c2");
}   
if (c1 == c2) {
    console.log("c1 is equal to c2");
} else {        
    console.log("c1 is not equal to c2");
}


//while loop
let i=1;
while(i<4){
    console.log(`student nembrer ${i}`);
    i++;
}
do{
    console.log(`student nembrer ${i}`);
    i--;
}while(i>0);

//for loop
for(let j=1;j<=3;j++){
    console.log(`nombr ${j}`);
}   
//continue and break
for(let k=1;k<=5;k++){
    if(k===3){
        continue; //skip the iteration
    }       
    if(k===5){
        break; //exit the loop
    }       
    console.log(`student nembrer ${k}`);
}

//functions
function add(a,b){
    return a+b;
}
let c=5;
let b=3;
let result=add(c,b);
console.log(`${c} + ${b} = ${result}`); //console.log(`${c} + ${b} = ${add(c,b)}`);


//arrays
let fruits=["apple","banana","orange"];
fruits.push("grape"); //add to the end
fruits.pop(  ); //remove from the end
fruits.unshift("mango"); //add to the beginning
fruits.shift(  ); //remove from the beginning
console.log(fruits);
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//...spread operator
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);

let name="redouane";
literse =[...name];
console.log(literse);


//objects
//create object
let person1 ={
    //attributes
    Fname:"Redouane" ,
    Lname:"Mestour" ,
    age:25,
    email:"redouanemestoure59@gmail.com" ,
    //method
    fullName:function(){
        return `${this.Fname} ${this.Lname}`;
    }
}
//access object properties
console.log(person1.Fname);
console.log(person1.fullName());


