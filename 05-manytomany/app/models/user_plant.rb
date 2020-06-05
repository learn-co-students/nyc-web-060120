class UserPlant 
    attr_reader :user, :plant, :day
    @@all = []
    def initialize(user, plant, day)
        @user = user 
        @plant = plant
        @day = day
        @@all << self
    end

    def all 
        @@all
    end

end