class Controller
# The logic for the user interaction lives in this class
  attr_accessor :user, :prompt

  def initialize()
    @prompt = TTY::Prompt.new
  end

  def greetings
    puts "Welcome to the Flatiron Book Application!"
    # answer = prompt.select("What would you like to do?",
    #   [
    #     {"Register" => 1},
    #     {"Login" => 2},
    #     {"Exit" => 3},
    #     {"The User Sees this" => "This is the answer choice"}
    #   ]
    # )
    # do_something_with(answer)

    prompt.select("What would you like to do?") do |menu|
      menu.choice "Register", -> { User.register_a_user }
      menu.choice "Login", -> { User.login_a_user }
    end
    # return value of Proc is the return value of prompt.select
  end

  def main_menu
    system "clear"
    self.user.reload
    puts "Welcome, #{self.user.username}!"
    prompt.select("What would you like to do?") do |menu|
      menu.choice "Look For Books", -> { self.look_for_books }
      menu.choice "See all books I've Reviewed", -> { self.see_all_books }
      menu.choice "Update Username", -> { self.update_username }

      menu.choice "Exit", -> { self.goodbye }
    end

  end


  def look_for_books
    puts "BOOK LOGIC HERE"
    # Book.look_in_api
    self.main_menu
  end



  def update_username
    puts "What username do you want to change?"
    usernam = gets.chomp
    self.user.update(username: usernam)
    self.main_menu
  end



  def see_all_books
    puts "REVIEW LOGIC HERE"

    self.user.reviews.each do |review|
      puts review.content
    end
    sleep 5
    # self.user.display_all_reviews()
    self.main_menu
  end




  def goodbye
    puts "Goodbye"
  end



end
















#
