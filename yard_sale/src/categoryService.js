class categoryService{
    constructor(website){
        this.website = website
    }

    getCategories(){
        fetch(this.website + `/categories`)
        .then(res => res.json())
        .then(info => {console.table(info)
        })
        debugger
    }
}