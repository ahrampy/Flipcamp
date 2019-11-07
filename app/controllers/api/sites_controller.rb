class Api::SitesController < ApplicationController

    def index
        @sites = Site.all
        render :index
    end

    def show
        @site = Site.find(params[:id])
    end

    def create
        @site = Site.new(site_params)
        if @site.save
            render :show
        else
            render json: ['Please fill out all fields with the correct input types']
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
