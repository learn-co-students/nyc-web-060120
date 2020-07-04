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

size_array = ["Large", "Medium", "Small" ]

drink_types = [
  {name: "AFFOGATO", price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "AMERICANO", price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image}, 
  {name: "CAFFÈ LATTE",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "CAFFÈ MOCHA",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "CAPPUCCINO",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "COLD BREW COFFEE",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "DOUBLE ESPRESSO",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "MACCHIATO",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "FLAT WHITE",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "FRAPPÉ",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "FREAKSHAKE",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "ICED LATTE",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "ICED MOCHA",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "IRISH COFFEE",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "MACCHIATO",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "RISTRETTO",  price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
  {name: "DRIP COFFEE", price: rand(5..20), size: size_array.sample, img_url: Faker::Fillmurray.image},
]

# Drink.create(name: 'Americano', price: rand(10..25), size: 'grande')
# Drink.create(name: 'Cortado', price: rand(10..25), size: 'grande')
# Drink.create(name: 'Latte', price: rand(10..25), size: 'grande')

puts '...creating Drinks'
drink_types.each do |drink|
  Drink.create(drink)
end

puts '.. creating Users'
10.times do 
  User.create(name: Faker::FunnyName.name, motto: Faker::Hipster.sentence, img_url: Faker::Fillmurray.image)
end 

puts '...creating Favorites'
30.times do 
  Favorite.create(user_id: User.all.sample.id, drink_id: Drink.all.sample.id, rating: rand(1..5), comment: Faker::Hipster.sentence)
end 



