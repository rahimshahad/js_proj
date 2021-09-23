# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
electronics = Category.create(name: "electronics")
furniture = Category.create(name: "furniture")
clothing = Category.create(name: "clothing")
toiletries = Category.create(name: "toiletries")
artwork = Category.create(name: "artwork")
kitchenware = Category.create(name: "kitchenware")

Item.create([
    {name: "Iphone 13 pro max", description: "The all new flagship iphone from Apple powered by the powerful A15 Bionic chip!", condition: "Used - Like New", price: "$1000", category_id: electronics.id},
    {name: "Iphone 13 mini", description: "The all new iphone from Apple powered by the powerful A15 Bionic chip!", condition: "New", price: "900", category_id: electronics.id},
    {name: "Levi's Straight Fit Jeans", description: "Light blue washed jeans perfect for most ocassions", condition: "New", price: "$40", category_id: clothing.id}
])