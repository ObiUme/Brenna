Rails.application.routes.draw do
  resources :photo_users
  resources :photos
  resources :users
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"
end
