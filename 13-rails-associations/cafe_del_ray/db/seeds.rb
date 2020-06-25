# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Drink.destroy_all
User.destroy_all
Favorite.destroy_all

Drink.create(name: 'Americano', price: rand(10..25), size: 'grande')
Drink.create(name: 'Cortado', price: rand(10..25), size: 'grande')
Drink.create(name: 'Latte', price: rand(10..25), size: 'grande')

10.times do 
  User.create(name: Faker::FunnyName.name, motto: Faker::Hipster.sentence, img_url: Faker::Fillmurray.image)
end 

30.times do 
  Favorite.create(user_id: User.all.sample.id, drink_id: Drink.all.sample.id, rating: rand(1..5), comment: Faker::Hipster.sentence)
end 



