class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.author = current_user.first_name
        if @review.save
            render json: ["Booked!"], status: 200
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def edit
        @review = current_user.reviews.find(params[:id])
        if @review.update(review_params)
            render json: ["review updated!"], status: 200
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render json: ["review removed"], status: 200
    end


    private

    def review_params
        params.require(:review).permit(:site_id, :recommend, :body)
    end

end
