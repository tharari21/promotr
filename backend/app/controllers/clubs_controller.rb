class ClubsController < ApplicationController
  # skip_before_action :authorize_request
  def index
    clubs = Club.all.with_attached_images

    render json: clubs, include: ['images'], status: :ok
  end
  def show
    render json: Club.find(club_params[:id])
  end
  def create
    club = Club.create(name: club_params[:name], description: club_params[:description], city: City.find(club_params[:city_id]), images: club_params[:images] )
    puts club.errors.full_messages
    render json: club
  end
  def add_review
    puts params[:club_id]
    puts params[:userId]
    reviewer = User.find(params[:userId])
    review = Review.create(star_rating: params[:starRating], reviewee: Club.find(params[:club_id]), comment: params[:comment], reviewer: reviewer)
    reviewer
    # render json: review.to_json(include: reviewer)
    render json: {review: review, reviewer: reviewer}
  end
  
  # def get_images
  #    Rails.application.routes.url_helpers.rails_blob_path(Club.first.images[0], only_path: true)
  # end
  

  private
  def club_params
    params.permit(:id, :name, :description, :city_id, images:[])
  end
end
