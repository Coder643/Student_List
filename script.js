var student_array=[];

function submit(){

var display_student_array=[];

for(var i=1; i<=4; i++) {
    var student=document.getElementById("student_input_"+i).value;
   console.log(student);

   student_array.push(student);
}

console.log(student_array);

var length_student_array=student_array.length; 
console.log(length_student_array);

for(var j=0; j<length_student_array; j++) {
    display_student_array.push("<h4>Name - "+student_array[j]+"</h4>");
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_coma").innerHTML=display_student_array;

var remove_coma=display_student_array.join(" ");
console.log(remove_coma);

document.getElementById("display_name_without_coma").innerHTML=remove_coma;

document.getElementById("submit_bttn").style.display="none";

document.getElementById("sort_bttn").style.display="inline-block";

}

function sort(){
 
    student_array.sort();
console.log(student_array);
 
var display_student_array_sort=[];

var length_student_array1=student_array.length; 
console.log(length_student_array1);

for(var k=0; k<length_student_array1; k++) {
    display_student_array_sort.push("<h4>Name - "+student_array[k]+"</h4>");
    console.log(display_student_array_sort);
}

var remove_coma1=display_student_array.join(" ");
console.log(remove_coma1);
document.getElementById("display_name_without_coma").innerHTML=remove_coma1;
}

{ document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array +"</h1>"; }
