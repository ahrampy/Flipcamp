class Api::SessionsController < ApplicationController
       
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
            )
        if @user
            signin(@user)
        else
            render json: ["Invalid email or password"], status: 401
        end
    end

    def destroy
        signout
    end

end
