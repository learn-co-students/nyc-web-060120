# All you pre-filled data goes here (Dummy data)


# DATA

Plant.create([
  {name: "Mushroom But It's a Plant", height: rand(18), genus: "Plant"},
  {name: "Tree", height: rand(18), genus: "Plant"},
  {name: "Rose", height: rand(18), genus: "Plant"},
  {name: "Lily", height: rand(18), genus: "Plant"}
])

User.create([
  {username: "Eric"},
  {username: "Tashawn"}
])















# CREATE
venus = Plant.new name: "Venus Fly Trap", genus: "Mario" #=> NO ID
venus.height = 28
venus.save

Plant.create(name: "Rosemary", height: 2, genus: "Spice") #=> Assigned an ID


# READ
# Find something by ID
Plant.find(2)

# Find the first plant by attribute(s)
rose = Plant.find_by({name: "Rosemary"}) #=> <#Rosemary>
Plant.find_by(id: 2) #=> <#Rosemary>
Plant.find_by(height: 2, genus: "Spicy") # => nil

# Find all the plants by attribute(s)
Plant.where("WHERE height > ?", 2) #=> [<#Rosemary>]


# UPDATE
rose.height = 27
rose.save

rose.update(name: "Rose")


# DESTROY
tree = Plant.create(name: "Tree")
tree.destroy







#
