class DrinksController < ApplicationController
  def index
    @drinks = Drink.all
    # render :index
  end


end
