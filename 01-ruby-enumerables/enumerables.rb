plants = [
    {name: "Okra", type: "Annual"},
    {name: "African Lily", type: "Bulb"},
    {name: "Kiwi", type: "Climber"},
    {name: "Yarrow", type: "Perennial"},
    {name: "English Rose", type: "Rose"}
]

map/collect => return an array 
find => return the first element that matches
select/filter/find_all => return all the elements that match


# 1. I am building a Plants application. I need to a way to hold all the information (name, type) about a SPECIFIC plant. Which datatype should I use?

# 2. Now, I need a way to hold a list of all of the plants in my app. Which datatype should I use? 

# 3. I want to be to find all plants with a specific type. How do I do that? What datatype should be returned?
plants_array = []
plants.each do |plant|
    if plant[:type] == "Annual"
        plants_array << plant 
    end
end
plants_array

plants.select do |plant|
    plant[:type] == "Annual"
end


# 4. I want to be able to find a single plant with a specific name. How do I do that? What datatype should be returned?

def find_plant(name)
    plants.find do |plant|
        plant[:name] == name
    end
end
=> {name: "Okra", type: "Annual"}

# 6. I want a list of only the names of each plant. How do I do that? What datatype should be returned?


plants_array = []
plants.each do |plant|
   plants_array << plant[:name]
end
plants_array


plants.map do |plant|
    plant[:name]
end

