Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  get '/clubs', to: 'clubs#index'
  post '/clubs', to: 'clubs#create'
  get '/clubs/:id', to: 'clubs#show'
  post '/clubs/:club_id/reviews', to: 'clubs#add_review'
  
  get '/cities', to: 'cities#index'
  post '/cities', to: 'cities#create'
  get '/cities/:id', to: 'cities#show'
  get '/cities/:id/clubs', to: 'cities#get_clubs'

  delete '/reviews/:id', to: 'reviews#destroy'
  patch '/reviews/:id', to: 'reviews#edit'

  get '/current_user', to: 'sessions#current_user'
  post '/login', to: 'sessions#login'
  post '/signup', to: 'sessions#signup'
  
end
