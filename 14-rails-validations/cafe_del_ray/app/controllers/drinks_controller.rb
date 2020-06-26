class DrinksController < ApplicationController
  before_action :find_drink, only: [:show, :edit, :update, :delete]

  def index
    @drinks = Drink.all
    # render :index
  end

  def show 
    # @drink = Drink.find(params[:id])

    # render :show
  end 

  def edit 
    # @drink = Drink.find(params[:id])
  end

  def update 
    # @drink = Drink.find(params[:id])
    if @drink.update(drink_params)
      redirect_to drink_path(@drink.id)
    else 
      flash[:my_errors] = @drink.errors.full_messages
      redirect_to edit_drink_path
    end 
    
  end 
  
  def new 
    @drink = Drink.new
  end 
  
  def create 
    @drink = Drink.create(drink_params)
    # @drink = Drink.new(drink_params)

    # if @drink.save
    if @drink.valid? 
      redirect_to drink_path(@drink.id)
    else 
      flash[:my_errors] = @drink.errors.full_messages
      redirect_to new_drink_path
    end 
  end 
  
  def destroy
    # @drink = Drink.find(params[:id])
    @drink.destroy
    
    redirect_to drinks_path
  end 
 
  private

  def drink_params
    params.require(:drink).permit(:name, :price, :size)
  end 

  def find_drink
    @drink = Drink.find(params[:id])
  end 

end
