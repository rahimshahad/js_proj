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
        this.element.innerHTML += `
        <div>
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <p>${this.condition}</p>
            <p>${this.price}</p>
        </div>
        <button id="delete-bttn">Delete</button><br>
        <br>
        `
        return this.element
    }

    displayOnDom(){
        Item.itemsContainer.appendChild(this.loadItem())
    }
   
    handleClick = (e) => {
        if(e.target.innerText === "Delete"){
            itemCall.deleteItem(this.id)     
        }
    }
    
}