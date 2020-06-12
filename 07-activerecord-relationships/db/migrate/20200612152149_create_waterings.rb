class CreateWaterings < ActiveRecord::Migration[5.2]

  def change

    create_table :waterings do |t|
      t.integer :user_id
      t.integer :plant_id
      # foreign keys

      t.integer :time
    end

  end
end
