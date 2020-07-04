class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :drink, null: false, foreign_key: true
      t.string :comment
      t.integer :rating

      t.timestamps
    end
  end
end
