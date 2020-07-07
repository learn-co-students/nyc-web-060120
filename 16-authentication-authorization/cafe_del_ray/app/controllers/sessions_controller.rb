class SessionsController < ApplicationController

  def reset_page_count
    session[:page_count] = 0
    
    # redirect_to drink_path()
    redirect_back fallback_location: drinks_path
  end 
end
