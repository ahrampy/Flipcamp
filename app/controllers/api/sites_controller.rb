class Api::SitesController < ApplicationController

    def index
        @sites = Site.all
        render :index
    end

    def show
        @site = Site.find(params[:id])

        # @site = site.includes(:reviews)
        render :show
    end

    def create
        @site = Site.new(site_params)
        if @site.save
            render :show
        else
            render json: ['Incorrect email/password'], status: 401
        end
    end

    def destroy
        @site = Site.find(params[:id])
        @site.delete
        render :index
    end

    private

    def site_params
    params.require(:site).permit(
        :title, 
        :lat,
        :lng,
        :site_type,
        :cost,
        :max_guests,
        :img
    )
    end

end
