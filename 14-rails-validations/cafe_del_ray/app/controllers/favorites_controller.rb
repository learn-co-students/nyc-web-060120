class FavoritesController < ApplicationController

  def new 
    @favorite = Favorite.new 

    @drinks = Drink.all  
    @users = User.all    
  end 

  def create 
    favorite = Favorite.create(favorite_params)

    redirect_to user_path(favorite.user_id)
  end 


  private 

  def favorite_params
    params.require(:favorite).permit(:comment, :rating, :user_id, :drink_id)
  end 

end
