Rails.application.routes.draw do
  root to: "pages#home"
  
  resources :sessions
  get '/user/login', to: 'sessions#login'
  get '/user/new', to: 'sessions#new'
  get '/user/dashboard', to: 'sessions#show'

  resources :posts 

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [ :show ]
  end
end
