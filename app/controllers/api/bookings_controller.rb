class Api::BookingsController < ApplicationController

    before_action :require_signed_in

    def index
        @bookings = Booking.all
        render :index
    end

    # def site_index
    #     @bookings = Booking.find_by(site_id: (params[:site_id]))
    #     render :index
    # end

    def create
        @booking = Booking.new(booking_params)
        @booking.user_id = current_user.id
        if @booking.save
            render json: ["Booked!"], status: 200
        else
            render json: @booking.errors.full_messages, status: 401
        end
    end

    def edit
        @booking = current_user.bookings.find(params[:id])
        if @booking.update(booking_params)
            render json: ["Booking updated!"], status: 200
        else
            render json: @booking.errors.full_messages, status: 401
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        render json: ["Booking removed"], status: 200
    end

    private

    def booking_params
        params.require(:booking).permit(:site_id, :check_in, :check_out, :num_guests)
    end
end
