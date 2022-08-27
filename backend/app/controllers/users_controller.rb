class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end
    def get_clubs
        # Club.where()
    end
    
end
