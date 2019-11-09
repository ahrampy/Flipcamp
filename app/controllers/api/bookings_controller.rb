class Api::BookingsController < ApplicationController

    def index
        @bookings = Booking.all
        render :index
    end

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
