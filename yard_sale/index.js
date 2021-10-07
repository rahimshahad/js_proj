// this is where I set global variables
const website = "http://localhost:3000"
const itemCall = new ItemService(website);
const itemForm = document.getElementById("form-container")
const categoryMenu = document.getElementById("category-list")
const categoryCall = new categoryService(website);

//--------------------------------------------------------------------
itemCall.getItems();
categoryCall.getCategories();
itemForm.addEventListener("submit", handleSubmit);


function handleSubmit(e){
    e.preventDefault();
    // debugger
    itemCall.createItem();
    e.target.reset();
}