Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # VERB   URL              controller action/method
    get   '/students', to: 'students#index'
    get   '/students/:id', to: 'students#show'
end
