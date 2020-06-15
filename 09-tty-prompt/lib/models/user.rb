class User < ActiveRecord::Base
  has_many :reviews
  has_many :books, through: :reviews

  def self.register_a_user
    puts "Okay, let's sign you up!"
    puts "What is your username?"
    username = gets.chomp

    puts "Okay, what's is your password?"
    pass = gets.chomp
    if User.find_by(username: username)
      puts "Sorry, a user with that Username exists."
    else
      User.create(username: username, password: pass)
    end
  end


  def self.login_a_user
    puts "What is your username?"
    username = gets.chomp

    pass = TTY::Prompt.new.mask("What is your password?")

    if User.find_by(username: username, password: pass)
      User.find_by(username: username, password: pass)
    else
      puts "Sorry, a user cannot be found."
    end
  end

end
