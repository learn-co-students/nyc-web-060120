Rails.application.routes.draw do
  get 'drinks/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/drinks', to: 'drinks#index'
  
end
