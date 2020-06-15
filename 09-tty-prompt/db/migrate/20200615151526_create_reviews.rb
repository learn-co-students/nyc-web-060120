class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :book_id
      t.string :content
      t.integer :user_id
    end
  end
end
