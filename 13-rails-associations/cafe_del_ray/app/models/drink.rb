class Drink < ApplicationRecord
  # has_many :favorites
  # has_many :users, through: :favorites

  def name_and_size 
    "#{self.name} | #{self.size}"
  end 
end
