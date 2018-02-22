Rails.application.routes.draw do
  root to: "pages#home"
  resources :sessions
  get '/user/login', to: 'sessions#login'
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [ :show ]
  end
end
