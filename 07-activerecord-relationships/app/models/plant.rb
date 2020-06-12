class Plant < ActiveRecord::Base
  has_many :waterings
  has_many :users, through: :waterings
end
