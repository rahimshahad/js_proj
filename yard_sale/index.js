// this is where I set global variables
const website = "http://localhost:3000"

const itemCall = new ItemService(website);

itemCall.getItems()