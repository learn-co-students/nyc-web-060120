class ApplicationController < ActionController::Base
  before_action :auth_user

  private

  def set_user
    @current_user = User.find_by(id: session[:user_id])
    # @current_user = User.find(session[:user_id])
  end 

  def auth_user 
    redirect_to new_user_path unless set_user
  end 

end
