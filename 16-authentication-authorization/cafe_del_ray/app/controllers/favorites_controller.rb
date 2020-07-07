class FavoritesController < ApplicationController

  def new 
    @favorite = Favorite.new 

    @drinks = Drink.all  
    @users = User.all    
  end 

  def create 
    @current_user.favorites << Favorite.create(favorite_params)

    redirect_to user_path(@current_user)
  end 


  private 

  def favorite_params
    params.require(:favorite).permit(:comment, :rating, :drink_id)
  end 

end
