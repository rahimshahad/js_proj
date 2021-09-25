class ItemService{
    constructor(website){
        this.website = website
    }

    // read action
    getItems(){
        fetch(`${this.website}/items`)
        .then (response =>response.json())
        .then (items => console.log(items))
    }
}