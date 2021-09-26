class Item {
    static all = [];
    static itemsContainer = document.getElementById("items-container")
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
        Item.all.push(this)
    }

    loadItem(){
        this.element.innerHTML += `
        <div>
            <h2>${this.name}</h2>
            <p>${this.condition}</p>
            <p>${this.price}</p>
        
        </div>
        `
        return this.element
    }

    displayOnDom(){
        Item.itemsContainer.appendChild(this.loadItem())
    }
   
    
}