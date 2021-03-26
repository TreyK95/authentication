Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get "/api_test", to:'static#api_test'
    resources :posts
    put'/posts/:id/likes', to:'posts#likes'
    resources :buddies
    get'my_buddies', to:'buddies#my_buddies'
    put'buddies/:id/add_buddy', to:'buddies#add_buddy'
  end 
end
