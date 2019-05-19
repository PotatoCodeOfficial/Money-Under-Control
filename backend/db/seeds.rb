# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Incomes
Category.create(name: "Salary", category_type: "income", icon: "fa fa-dollar", is_deleted: false)
Category.create(name: "Bond", category_type: "income", icon: "fa fa-dollar", is_deleted: false)
Category.create(name: "Gift", category_type: "income", icon: "fa fa-dollar", is_deleted: false)
Category.create(name: "Loans", category_type: "income", icon: "fa fa-dollar", is_deleted: false)

# Expenses
Category.create(name: "Food", category_type: "expense", icon: "fa fa-dollar", is_deleted: false)
Category.create(name: "Bill", category_type: "expense", icon: "fa fa-dollar", is_deleted: false)
Category.create(name: "House", category_type: "expense", icon: "fa fa-dollar", is_deleted: false)
Category.create(name: "Car", category_type: "expense", icon: "fa fa-dollar", is_deleted: false)
