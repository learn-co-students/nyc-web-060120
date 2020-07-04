class AddImgUrlToDrinks < ActiveRecord::Migration[6.0]
  def change
    add_column :drinks, :img_url, :string
  end
end
