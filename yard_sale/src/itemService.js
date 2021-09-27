class ItemService{
    constructor(website){
        this.website = website
    }

    // read action
    getItems(){
        fetch(this.website + `/items`)
        .then(response => response.json())
        .then(items => {
            for (const item of items){
                const i = new Item(item)
                i.displayOnDom()
            }
        })
    .catch()
    // debugger
    }

    // create action
    createItem(){
        const itemObject = {
            name: document.getElementById("name"),
            description: document.getElementById("description"),
            condition: document.getElementById("condition"),
            price: document.getElementById("price")
        }
        
        fetch(this.website + `/items`)
        .then(response => response.json())
        .then(data => console.log(data))
        debugger
    }
    
}