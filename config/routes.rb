Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => { :sessions => 'users/sessions', :registrations => 'users/registrations', :passwords => 'users/passwords'}
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
  get '/users/password/reset', to: 'users#reset_pw', as: :reset_password

  resources :posts 
  post '/posts/new', to: 'posts#create'
  post '/posts/addreaction', to: 'posts#reaction'
  get '/posts/:id', to: 'posts#show'
  get '/post/view/:id', to: 'posts#view'

  resources :bookmarks
  get '/postlikes/:postId', to: 'postlikes#show'
  post '/postlikes', to: 'postlikes#create'

  resources :comments 
  post '/comments/new', to: 'comments#create'
  get '/comments/:id', to: 'comments#show'

  resources :users 
  post '/users/new', to: 'users#create'

  get '/about', to: 'pages#about'
  get '/privacy', to: 'pages#privacy'
  get '/terms', to: 'pages#terms'
  get '/conduct', to: 'pages#conduct'
  get '/contact', to: 'pages#contact'

  get '/tags/admin', to: 'posts#tag_admin'
  post '/tags/update', to: 'posts#tags_update'
  post '/tags/new', to: 'posts#tag_new'

  get '/tags', to: 'tags#index'

end
