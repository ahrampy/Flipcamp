class Api::ReviewsController < ApplicationController

    before_action :require_signed_in

    


    private

    def review_params
        params.require(:review).permit(:site_id, :user_id, :reccomend, :body)
    end

end
