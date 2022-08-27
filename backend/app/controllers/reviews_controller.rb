class ReviewsController < ApplicationController
    
    def destroy
        Review.destroy(params[:id])
    end
    def edit
        review= Review.find(params[:id])
        review.update(star_rating: params[:star_rating], comment: params[:comment])
        render json: {review: review}
    end
end
