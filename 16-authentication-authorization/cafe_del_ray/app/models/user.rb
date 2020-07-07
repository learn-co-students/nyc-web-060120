class User < ApplicationRecord
  has_many :favorites
  has_many :drinks, through: :favorites

  validates :name, presence: true

  has_secure_password

  # def password=(secret)
  #   hashed_pass = BCrypt::Password.create(secret)
  #   self.password_digest = hashed_pass
  # end 

  # def password 
  # end 
end
