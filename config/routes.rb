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
    # delete'buddies/:id/remove_buddy', to:'buddies#remove_buddy'
    # destroy'my_buddies', to:'buddies#my_buddies'
    delete'my_buddies/:id', to:'buddies#destroy'
    put'my_buddies/:id', to:'buddies#remove_buddy'
  end 
end
