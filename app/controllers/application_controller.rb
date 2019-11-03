class ApplicationController < ActionController::Base

    helper_method :current_user, :signed_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def signin(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def signout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def signed_in?
        !!current_user
    end
    
    # def require_logged_out
    #     redirect_to user_url(current_user) if logged_in?
    # end

    # def require_logged_in
    #     redirect_to new_session_url unless logged_in?
    # end

end
