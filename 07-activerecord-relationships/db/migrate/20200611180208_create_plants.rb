class CreatePlants < ActiveRecord::Migration[5.2]

  def change

    create_table :plants do |t|
      t.string :name
      t.integer :height
    end

  end

end
