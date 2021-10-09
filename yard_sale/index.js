// this is where I set global variables
const website = "http://localhost:3000"
const itemCall = new ItemService(website);
const itemForm = document.getElementById("form-container")
const categoryMenu = document.getElementById("category-list")
const categoryCall = new categoryService(website);
const list = document.getElementById("items-container")
const search = document.forms["search-items"].querySelector("input");
//--------------------------------------------------------------------
itemCall.getItems();
categoryCall.getCategories();
itemForm.addEventListener("submit", handleSubmit);
search.addEventListener("keyup", searchItem);


function handleSubmit(e){
    e.preventDefault();
    // debugger
    itemCall.createItem();
    e.target.reset();
}

function searchItem(e){
    const term = e.target.value.toLowerCase();
    const itemsLi = list.getElementsByTagName("li");
    Array.from(itemsLi).forEach(item =>
        {
            const name = item.querySelector(".name").textContent;
            if(name.toLowerCase().indexOf(term) != -1) {
                item.style.display = "block";
            }
            else{
                item.style.display = "none"
            }
        })
}