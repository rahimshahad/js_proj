class categoryService{
    constructor(website){
        this.website = website
    }

    getCategories(){
        fetch(this.website + `/categories`)
        .then(res => res.json())
        .then(info => {info.forEach(category =>{
            const c = new Category(category)
            c.appendToMenu()
        })
        })
        // debugger
    }
}