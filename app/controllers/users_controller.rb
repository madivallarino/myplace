class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def index
        users = User.all
        render json: users, include: [:followers, :followed]
    end

    def create
   
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "No active session"}, status: :authorized
        end
    end

private
def user_params
    params.permit(:firstName, :lastName, :email, :password, :password_confirmation)
end

def unprocessable_entity_response(invalid)
    render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
end

end