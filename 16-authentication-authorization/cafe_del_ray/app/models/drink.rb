class Drink < ApplicationRecord
  # has_many :favorites
  # has_many :users, through: :favorites

  #:name needs to exsist && must be unique
  #:price greater than 50 less than 80
  #:size must be 1 of three sizes

  validates :name, :size, :price, presence: true
  validates :name, uniqueness: {case_sensitive: false}

  validates :price, numericality: {greater_than: 5, less_than: 20}

  validates :size, inclusion: {case_sensitive: false, in: ["Large", "Medium", "Small"]}

  # validate :call_some_custom_validation_method


  def name_and_size 
    "#{self.name} | #{self.size}"
  end 
end
