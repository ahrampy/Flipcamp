class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            signin(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

end
