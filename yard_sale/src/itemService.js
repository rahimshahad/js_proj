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
        const item = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            condition: document.getElementById("condition").value,
            price: document.getElementById("price").value,
            category_id: categoryMenu.value
        }
         
        // debugger
        const config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }
        fetch(this.website + `/items`, config)
        .then(response => response.json())
        .then(data => {
            // render json: {error: "Couldn't save"}
            if(data.error){
                alert(data.error)
            }
            else{
                const v = new Item(data)
                v.displayOnDom()
            }
            
        })
    }

    deleteItem(e){
        const id  = e.target.parentElement.dataset.id
        e.target.parentElement.remove()
        // debugger
        fetch(`${this.website}/items/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(json => alert(json.message))

    }

    editItem(item){
        const {name, description, condition, price} = item
        const itemInfo = {
            name, description, condition, price
        }

       
        debugger
        
    }
    
}