class Watering < ActiveRecord::Base
  belongs_to :user
  belongs_to :plant
end
