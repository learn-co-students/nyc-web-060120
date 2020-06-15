require_relative '../config/environment'

puts "Welcome to the Flatiron Book Review Application 🤓"
puts "What book would you like to look for?"
user_input_variable = gets.chomp

url = "https://www.googleapis.com/books/v1/volumes?q=#{user_input_variable}"
restClientResponseObject = RestClient.get(url)
jsonButItsAString = restClientResponseObject.body
workable_hash = JSON.parse(jsonButItsAString)

arrayOfBooks = workable_hash["items"]

arrayOfBooks.each do |book_hash|

  book_title =  book_hash["volumeInfo"]["title"]
  book_author = book_hash["volumeInfo"]["authors"] && book_hash["volumeInfo"]["authors"].first
  book_desc = book_hash["volumeInfo"]["description"]

  book_instance = Book.create(
    title: book_title,
    author: book_author,
    description: book_desc
  )

  puts "==================================="
  puts "#{book_instance.id()} ) #{book_instance.title()}"


end

puts "Which book would you like to review? Please type in the ID here:"
id_of_book = gets.chomp

book_to_review = Book.find(id_of_book)

puts "You have chosen to review: #{book_to_review.title}"
puts "What review do you want to leave?"

review_content = gets.chomp

Review.create(
  book_id: book_to_review.id,
  content: review_content,
  author: "Eric"
)











binding.pry
0













#
