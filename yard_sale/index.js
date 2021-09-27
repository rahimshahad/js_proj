// this is where I set global variables
const website = "http://localhost:3000"
const itemCall = new ItemService(website);
const itemForm = document.getElementById("form-container")

//--------------------------------------------------------------------
itemCall.getItems()

itemForm.addEventListener("submit", handleSubmit)


function handleSubmit(e){
    e.preventDefault();
    e.target.reset();
    // debugger
    itemCall.createItem();
}