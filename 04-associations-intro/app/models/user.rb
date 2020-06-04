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
        # self => user instance
        Plant.all.select do |plant|
            # plant => plant instance
            # plant.user => user instance
            plant.user == self
        end
    end

    def add_plant(name, type, height)
        Plant.new({name: name, type: type, height: height, user: self})
    end
    


end