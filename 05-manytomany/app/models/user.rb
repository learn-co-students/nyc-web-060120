class User 
    attr_reader :age
    def initialize(hash)
        @name = hash[:name]
        @age = hash[:age]
    end

    def name
        if @name
            @name
        else
            puts "a girl has no name"
        end 
    end

    def plants
        self.user_plants.map do |user_plant|
            user_plant.plant
        end
    end

    def user_plants 
        user_plants= UserPlant.all.select do |user_plant|
            user_plant.user == self
        end
    end

    def which_days
        # user_plants.map{|up| up.day}.uniq
        user_plants.map do |up|
            up.day
        end.uniq
    end








    def add_plant(name, type, height)
        Plant.new({name: name, type: type, height: height, user: self})
    end
    


end