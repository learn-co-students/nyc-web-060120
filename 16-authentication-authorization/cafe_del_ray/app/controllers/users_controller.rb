class UsersController < ApplicationController
  skip_before_action :auth_user, only: [:new, :create, :index]

  def index 
    @users = User.all
  end 

  def show 
    @user = User.find(params[:id])

    if @user == @current_user
    else
      redirect_to users_path 
    end 
  end 
  
  def new 
    @user = User.new
  end 
  
  def create
    @user = User.create(user_params)
    
    if @user.valid? 
      session[:user_id] = @user.id
      redirect_to @user
    else
      flash[:errors] = @user.errors.full_messages 
      redirect_to new_user_path  
    end 
    # redirect_to user_path(user.id)
    # redirect_to user_path(user)
  end
  
  def destroy 
    @user = User.find(params[:id])
    @user.destroy 
    redirect_to users_path
  end 

  private 

  def user_params 
    params.require(:user).permit(:name, :motto, :img_url, :password)
  end 
  
end
