class SessionsController < ApplicationController
    def signup
        user = User.new(user_params)
        if user.save
            token = encode_user_data({user_data: user.id})
            time = Time.now + 24.hours.to_i
            cookies.signed[:jwt] = {value:  token, httponly: true, expires: time}
            render json: { token: token, expires: time.strftime("%m-%d-%Y %H:%M:%S") }
        else
            render json: {errors: user.errors.full_messages}
        end
    end
    def login
        user = User.find_by(username: user_params[:username])
        if user
            if user.authenticate(user_params[:password])
                # token = encode_user_data({user_id: user.id})
                # time = Time.now + 24.hours.to_i
                # puts cookies.signed
                # cookies.signed[:jwt] = {value: token, httponly: true, expires: time}
                # puts cookies.signed[:jwt]
                session[:current_user_id] = user.id
                # render json: {token: token, expires: time.strftime("%m-%d-%Y %H:%M:%S")}, status: :ok
                render json: {message: 'logged in!'}
            else
                render json: {errors: "Invalid credentials"}, status: 404
            end
        else
            render json: {errors: "Invalid credentials"}, status: 404
        end
    end
    def logout
        # cookies.delete(:jwt)
        session.delete(:current_user_id)
        # flash[:notice] = "You have successfully logged out."
        @_current_user = nil
    end
    def current_user
        # render json: User.find_by(id: session[:current_user_id])
        puts "session"
        puts session[:current_user_id]
    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end

end
