class User < ActiveRecord::Base
  has_many :waterings
  has_many :plants, through: :waterings
  # AR Macros allow us to pull out associations (Gives instance methods)

  # def waterings
  #   # binding.pry
  #   Watering.where(user_id: self.id)
  #
  #   # OR
  #
  #   # Watering.all.select do |watering|
  #   #   watering.user_id === self.id
  #   # end
  # end


  def list_out_all_plants

    puts "Welcome #{self.username}!"
    puts "Here are the plants you watered:"
    self.plants.each_with_index do |plant, idx|
      puts "#{idx +1}) #{plant.name}"
    end

  end

end
