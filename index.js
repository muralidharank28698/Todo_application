// id getting from html page

const $inputBox=document.getElementById("inputbox");
const $btnClick=document.getElementById("btnEvent");
const $taskListVar = document.getElementById("taskList");

//remove function
function handleRemove(){
   this.remove();
}

//toggle function
function toggleFn(){
   this.classList.toggle("listStyle");
}

//button press function 
function btnFunction(){
const $userInputValue =$inputBox.value;

//if user didn't type anything at that time it will show alert msg
if($userInputValue.length===0){
   return alert("enter some task");
}
   const $inputLength= $userInputValue.length;
   let count=0;
   for(let i=0;i<$inputLength;i++){
      if($userInputValue[i]===" "){
         count++;
      }
   }

// if user type only space at that time it will show alert message
   if($inputLength===count){
      return alert("enter valid task");
   }

     const $newElement=document.createElement('div');
     $newElement.setAttribute("class","task");
     $newElement.innerText= $userInputValue;
     $taskListVar.append($newElement);
     $newElement.classList="taskStyle";
     $inputBox.value="";
     $newElement.addEventListener('click',toggleFn);
     $newElement.addEventListener('dblclick',handleRemove);
}

//keypress event function
function keyPressFunction(e){
      if (e.code==="Enter" && e.target.value !==''){
      btnFunction();
   }
}

//event lintener
$btnClick.addEventListener('click',btnFunction);
$inputBox.addEventListener('keyup',keyPressFunction);



     
   





























//   $btnClick.onclick= btnFunction;
 



//  console.log($taskListVar);

 // console.log($inputValue);
   
   
    //  const $userInput="Task 1";

     
    //  document.getElementById('taskList').innerHTML=`
    //         <div class="task">${$inputValue}</div>


     
    //  `;

    //  console.log($newElement);





 
