Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :drinks
  resources :favorites, only: [:new, :create]
  resources :users, only: [:show]
  
  # get '/drinks', to: 'drinks#index', as: 'drinks'

  # get '/drinks/new', to: 'drinks#new', as: 'new_drink'
  # post '/drinks', to: 'drinks#create'
  
  # get '/drinks/:id', to: 'drinks#show', as: 'drink'

  # get '/drinks/:id/edit', to: 'drinks#edit', as: 'edit_drink'
  # patch '/drinks/:id', to: 'drinks#update'

  # delete '/drinks/:id', to: 'drinks#destroy'
end
