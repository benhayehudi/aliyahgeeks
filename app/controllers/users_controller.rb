require 'pry'

class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  before_action :set_user, only: [:show, :edit, :update, :view]
 
  def index
    @users = User.all
  end
 
  def show
  end

  def create 
    @user = User.new(user_params)
    if @user.save 
      redirect_to user_login_path
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end 

  def view 
    user_info = { 
      :user => @user.user_dashboard_info, :posts => @user.user_posts, :bookmarks => @user.user_bookmarks, :bookmark_count => @user.bookmark_count
    }
    render :json => user_info.to_json
  end
 
  def edit
    if current_user
      user_profile_edit_path(current_user)
    else 
      root_path
    end 
  end

  def reset_pw 
  end

  def user_check
    if current_user
      render :json => current_user.to_json(:only => [:id, :email, :first_name, :last_name, :twtter, :location], :methods => [:headshot_url, :user_bookmarks, :bookmark_count])
    else
      render json: @errors
    end
  end
 
  # # PATCH/PUT /users/1
  # # PATCH/PUT /users/1.json
  def update
    if @user.update(user_params)
      dashboard_path(current_user)
    else
      dashboard_path(current_user)
    end
  end

  def destroy
    reset_session
    redirect_to root_path 
  end

 
  private
    def set_user
      @user = User.find(params[:id])
    end
 
    def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :location, :twtter, :image, :password, :encrypted_password)
    end
end
