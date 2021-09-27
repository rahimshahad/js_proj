class Category{
    constructor({name, id, items}){
        this.name = name;
        this.id = id;
        this.items = items;
    }

    appendToMenu(){
      const option = document.getElementById("selection")
       option.value = this.id;
       option.innerText = this.name;
    //    debugger
    }
}