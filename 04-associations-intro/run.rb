require 'pry'
require_relative './app/models/plant.rb'
require_relative './app/models/user.rb'



user1 = User.new({name: "Jeff", age: 21})
user2 = User.new({name: "Brianna", age: 21})
user3 = User.new({name: "Eric", age: 21})



plants = [
    {name: "Okra", type: "Annual", height: 10, user: user1},
    {name: "African Lily", type: "Bulb", height: 10, user: user2},
    {name: "Kiwi", type: "Climber", height: 10, user: user3},
    {name: "Yarrow", type: "Perennial", height: 10, user: user1},
    {name: "English Rose", type: "Rose", height: 10, user: user2}
]

plants.each do |plant_hash|
    Plant.new(plant_hash)
end

plant1 = Plant.all[0]

binding.pry