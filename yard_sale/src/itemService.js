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
            price: document.getElementById("price").value
        }
        // debugger;
        
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
            console.log(data)
        })
    }
    
}