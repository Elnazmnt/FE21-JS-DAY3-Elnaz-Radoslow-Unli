/*var x = Math.floor((Math.random() *31) -5);
    console.log(x);

    if (x < 11) {
        console.log("the weather is cold");
        } else {
            console.log("the weather is moderate");
        };*/


/*let array = [1, 7, 55, -3, 9, 111];
let hi= array[0];
for(let i = 0; i < array.length; i++){
       if(hi < array[i]){
hi = array[i+1];
    }
}
console.log("highest value is: number " + hi);*/



/*var x = Math.floor((Math.random() *55) -15);
    console.log(x);
    if (x < 11) {
        document.write("the weather is cold");
        document.getElementById("cold").style.display = "flex";
        } else if (x < 32) {
            document.write("the weather is moderate");
            document.getElementById("moderate").style.display = "flex";
        } else {
            document.write("the weather is hot");
             document.getElementById("hot").style.display = "flex";
        };*/

/*let students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
let grades = [76, 85, 65, 93, 81];


for (let i = 0; i < grades.length; i++){
document.write(students[i] + "=" + grades[i] + "<br>");
}

let sum = 0;
for (let f = 0; f < grades.length; f++){
     sum=sum+grades[f];
}
let avg = sum/grades.length;

if (avg < 60) {
    document.write("Class average is " + avg + " points and the grade is: F");
} else if (avg < 70) {
    document.write("Class average is " + avg + " points and the grade is: D");
} else if  (avg < 80){
    document.write("Class average is " + avg + " points and the grade is: C");
} else if  (avg < 90){
    document.write("Class average is " + avg + " points and the grade is: B");
} else {
    document.write("Class average is " + avg + " points and the grade is: A");
}*/

/*let x="*";

for ( let i = 0; i < 5; i++){
    document.write(x + "<br>");
     x=x+"*";
}*/

var result = prompt("type your name");

Students = ["John", "Jane"]

MathGrades = [70, 85]

/*for (result of Students) {
    document.write(Students[i] + " has reached " + MathGrades[i] + " points im Math this season <br>");
    }*/

    
for (let i = 0; i < MathGrades.length; i++){
    document.write(Students[i] + " has reached " + MathGrades[i] + " points im Math this season <br>");
    }

