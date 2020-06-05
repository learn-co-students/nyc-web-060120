require 'pry'
class Plant
    attr_reader :type, :height
    attr_accessor :name
    @@all = []
    def initialize(hash)
        @name = hash[:name] 
        @type = hash[:type]
        @height = hash[:height]
        @@all << self
    end

    def users
        user_plants = UserPlant.all.select do |user_plant|
            user_plant.plant == self 
        end
    
        user_plants.map do |user_plant|
            user_plant.user
        end
    end






    def water
        self.height=(rand(10)) 
        puts "I am a #{name} and I am #{height} cm"
    end

    def give_sunlight
        self.height=(rand(10)) 
        puts "I am a #{name} and I am #{height} cm"
    end
    def self.all 
        @@all
    end
    def self.total_plants
        @@all.count
    end
    
    def self.all_names
        binding.pry
        @@all.map do |plant|
            binding.pry
            plant.name
        end
    end
    
    private 
    
    def height=(added_height)
        @height = @height + added_height
        if @height >= 12 
            puts "time for a trim"
        end
    end
    
end

