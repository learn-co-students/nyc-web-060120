# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Favorite.destroy_all
Drink.destroy_all
User.destroy_all

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

users = [
  {name: "Adam Altmark", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U014ZJ9KUBA-e011fe7b1973-512"},
  {name: "Alex Ortiz", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149P2DPGA-5bc46d19c029-512"},
  {name: "Andrew Santos", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-UL8B585HP-14e7e4df1c70-512"},
  {name: "Andy Agus", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-UQTV5GEFM-59b31a47e35f-512"},
  {name: "Berel Levy", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149V71ZRR-179071fd3f16-512"},
  {name: "Brandon Gubitosa", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149P2ATLJ-a175739d4005-512"},
  {name: "Corey Lynch", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U011LC0U7GW-f7b87b95c922-512"},
  {name: "Daniel Reyes", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0136GZTQSG-77e66445bb6c-512"},
  {name: "Dolly Desir", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0130BRC3K4-9001c9b22325-512"},
  {name: "Jeffrey Musselman", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-UMC62QVAM-019eb6bf04b1-512"},
  {name: "Leamsi Escribano", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149P2CRNE-50a2d608ab6c-512"},
  {name: "Malcolm Staso", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U014ZJ9F1K2-d9c4863dcd04-512"},
  {name: "Maleeha Bhuiyan", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0148BWV805-946025995b60-512"},
  {name: "Maxwell Croy", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U014DQ3SKMK-8164c7778a8b-512"},
  {name: "Maya Blevins", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149V711B5-b550a063d7f8-512"},
  {name: "Melody Soriano", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149P29UH0-611bbf796682-512"},
  {name: "Muhammad Hassan", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U014ZJ9C4HE-3e3623a4de5d-512"},
  {name: "Paola Dolcemascolo", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-UUNMDGQHG-384b0c170392-512"},
  {name: "Rebecca Rosenberg", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U014ZJ9E3RN-0006b89adbe7-512"},
  {name: "Rudy Guerrero", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U013V17QKQF-b9866186602f-512"},
  {name: "Shadman Ahmed", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149V6VD1R-25fe7ef5f450-512"},
  {name: "Shiro Han", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149P28WBU-de0d070dd1f1-512"},
  {name: "Stephen Galvan", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U014ZJ9GY6L-aca36055b09d-512"},
  {name: "Tashawn Williams", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U7PSME4DA-8b811931b3d9-512"},
  {name: "Travis Prol", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U0149P2ES90-c5e480b910c1-512"},
  {name: "Eric Kim", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U91CXSUN4-3bac0a7f6a08-512"},
  {name: "Greg Dwyer", motto: Faker::Hipster.sentence, img_url: "https://ca.slack-edge.com/T02MD9XTF-U8H2RA3C1-643c8ce562ef-512"}
]

# Drink.create(name: 'Americano', price: rand(10..25), size: 'grande')
# Drink.create(name: 'Cortado', price: rand(10..25), size: 'grande')
# Drink.create(name: 'Latte', price: rand(10..25), size: 'grande')

puts '...creating Drinks'
drink_types.each do |drink|
  Drink.create(drink)
end

puts '.. creating Users'
users.each do |user| 
  User.create(user)
end 
# 10.times do 
#   User.create(name: Faker::FunnyName.name, motto: Faker::Hipster.sentence, img_url: Faker::Fillmurray.image)
# end 

puts '...creating Favorites'
30.times do 
  Favorite.create(user_id: User.all.sample.id, drink_id: Drink.all.sample.id, rating: rand(1..5), comment: Faker::Hipster.sentence)
end 



