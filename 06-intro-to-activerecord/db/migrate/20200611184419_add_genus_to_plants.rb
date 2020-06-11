class AddGenusToPlants < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :genus, :string
  end
end
