Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => { :sessions => 'users/sessions', :registrations => 'users/registrations'}
  root to: "pages#home"
  
  resources :sessions
  get '/user/login', to: 'sessions#new'
  post '/user/login', to: 'devise/sessions#create'
  get '/user/dashboard/:id', to: 'users#show', as: :dashboard
  get '/user/edit/:id', to: 'users#edit', as: :user_profile_edit
  post '/user/edit/:id', to: 'users#update'
  get '/users/check_for_user', to: 'users#user_check'
  get '/users/sign_out', to: 'users#destroy'
  get '/user/posts/:id', to: 'users#view', as: :user_posts_api

  resources :posts 
  post '/posts/new', to: 'posts#create'
  post '/posts/addreaction', to: 'posts#reaction'
  get '/posts/:id', to: 'posts#show'
  get '/post/view/:id', to: 'posts#view'

  resources :bookmarks
  get '/postlikes/:postId', to: 'postlikes#show'
  post '/postlikes', to: 'postlikes#create'

  resources :users 
  post '/users/new', to: 'users#create'

end
