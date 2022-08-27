class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    include ::ActionController::Cookies

    SECRET = Rails.application.secret_key_base
    def not_found
        render json: {error: 'not found'}
    end

    def authorize_request
        jwt = cookies.signed[:jwt]
        puts "jwt"
        puts jwt
        decoded = decode_user_data(jwt)
        puts decoded
        @current_user = User.find(decoded[:user_id])
        puts @current_user
    end
    def encode_user_data(payload, exp=24.hours.from_now)
        payload[:exp] = exp.to_i
        token = JWT.encode(payload, SECRET)
        token
    end
    def decode_user_data(token)
        decoded = JWT.decode(token, SECRET)[0]
        puts decoded
        HashWithIndifferentAccess.new decoded
    end
    # private

    # def current_user
    #     @_current_user ||= session[:current_user_id] && User.find_by(id: session[:current_user_id])
    #     render json: User.find_by(id: session[:current_user_id])
    # end

end
