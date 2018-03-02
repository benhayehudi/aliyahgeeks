Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => { :sessions => 'users/sessions'}
  root to: "pages#home"
  
  resources :sessions
  get '/user/login', to: 'sessions#new'
  post '/user/login', to: 'devise/sessions#create'
  get '/user/dashboard/:id', to: 'users#show', as: :dashboard
  get '/user/edit/:id', to: 'users#edit', as: :user_profile_edit
  post '/user/edit/:id', to: 'users#update'
  get '/users/check_for_user', to: 'users#user_check'
  get '/users/sign_out', to: 'users#destroy'

  resources :posts 
  post '/posts/new', to: 'posts#create'

end
