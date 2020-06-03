require 'pry'
# Pry is now within scope

class Plant
    # binding.pry
    # attr_reader :type, :height
    # attr_accessor :name

    def initialize(name, type, height=10)
        @name = name 
        @type = type
        @height = height
    end

    def name 
        @name
    end
    def height
        @height
    end

    def name=(name)
        @name = name
    end


end

# plant = Plant.new("Okra", "Annual")

binding.pry

# def first_method
#     puts "this is the first method"
#     second_method
# end

# def second_method
#     puts "this is the second method"
# end

# second_method
# first_method

# goes to the 'pry' code, looks for binding.pry and executes it 

# block hasn't been completed yet

# WE NEVER INVOKE THE METHOD
# .new method does two things:
    # 1. create a version of yourself (instance)
    # 2. Look for an initialize method. If one exists for the instance, invoke it