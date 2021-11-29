const form = document.querySelector(".from form");
const input = document.querySelector("#inputBox");
const btn = document.querySelector("#btn")
const todoul = document.querySelector(".addTodoList")




let myArray = [];

function addTodo(){
    
    todoul.innerHTML = ""

    for (let index in myArray) {

        todoul.innerHTML += `<li >
        <p>${myArray[index]}</p>
        <div class ="tosoListing">
            <button onclick="editFunc(${index})"> Edit </button>
            <button onclick="deleteFunc(${index})"> Delete </button>
        </div>
        </li>`;


    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    myArray.push(input.value)
    
    // if(input.value !==""){
    //     myArray.push(input.value)
    // }else{
    //     myArray="";
    // }
    
    input.value = "";

    addTodo()

})




function deleteFunc(index){
   myArray = myArray.filter((item,i)=> index !== i)
   addTodo()
}

function editFunc(index){
    input.value = myArray[index]
    myArray = myArray.filter((item,i)=> index !== i)
    addTodo()
 }

