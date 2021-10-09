class Item {
    static all = [];
    static itemsContainer = document.getElementById("items-container")
    item
    constructor({name, description, condition, price, id, category_id}){
        this.name = name
        this.description = description
        this.condition = condition
        this.price = price
        this.id = id
        this.category_id = category_id

        this.element = document.createElement("li")
        this.element.dataset.id = this.id
        this.element.id = `item - ${this.id}`
        this.element.addEventListener("click", this.handleClick)
        Item.all.push(this)
    }

    loadItem(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
            <h2 class="name"> ${this.name}</h2>
            <p class="description"> ${this.description}</p>
            <p class="condition">${this.condition}</p>
            <p class="price"> ${this.price}</p>
        </div>
        <button class = "delete" id="delete-bttn">Delete Item</button><br>
        <button class ="edit" id="edit-bttn">Edit Item</button><br>
        <br>
        `
        return this.element
    }

    displayOnDom(){
        Item.itemsContainer.appendChild(this.loadItem())
    }
   
    handleClick = (e) => {
        if(e.target.innerText === "Delete Item"){
            itemCall.deleteItem(e)     
        }
        else if(e.target.innerText === "Edit Item") {
            // console.log(e.target)
            // debugger
            e.target.innerText = "Save Item"
            this.createEditForm()
        }
        else if(e.target.innerText === "Save Item") {
            console.log("saved")
            e.target.innerText = "Edit Item"
            this.updatedItem()
        }
    }

    updatedItem(){
        this.name = this.element.querySelector(".edit-name").value
        this.description = this.element.querySelector(".edit-description").value
        this.condition = this.element.querySelector(".edit-condition").value
        this.price = this.element.querySelector(".edit-price").value
        itemCall.editItem(this)
        // debugger
    }

    createEditForm(){
        const editForm = this.element.querySelector("div")
        for (const element of editForm.children){
        const input = element.innerText;
        const name = element.classList[0];
        element.outerHTML = `<input type="text" class="edit-${name}" value="${input}" />`
        }
        // debugger
    }
    
}