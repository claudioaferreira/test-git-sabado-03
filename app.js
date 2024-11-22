const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        

        li.addEventListener("click", function(){
            li.classList.toggle('checked');
        })

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      
    }
    inputBox.value = ''; 
}


listContainer.addEventListener("click", function(e){

    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})