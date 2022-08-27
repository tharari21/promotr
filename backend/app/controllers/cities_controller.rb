class CitiesController < ApplicationController
    def index
        cities = City.all.with_attached_image
        render json: cities, include: ['image'], status: :ok
    end
    def create
        puts "city Params"
        puts city_params
        City.create(name: city_params[:name], image: city_params[:image])
    end
    def show
        city = City.find(params[:id])
        render json: city
    end
    def get_clubs
        render json: Club.where(city_id: params[:id])
    end

    private

    def city_params
        params.permit(:name, :image)
    end
end
