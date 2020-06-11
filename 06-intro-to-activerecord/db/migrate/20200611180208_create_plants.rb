class CreatePlants < ActiveRecord::Migration[5.2]


  def change

    create_table :plants do |t|
      # columns go here
      t.string :name
      t.integer :height
    end

  end


end

# Migration files are templates for instructions to be executed
# create_table is an instance method that works with a block
