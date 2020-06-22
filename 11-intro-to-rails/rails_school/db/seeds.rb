# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "...destroying students"
Student.destroy_all

puts '...seeding students'
20.times do 
  Student.create(name: Faker::FunnyName.name, age: rand(9..21), grade: rand(50..100))
end 