class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  before_action :set_user, only: [:show, :edit, :update]
 
  def index
    @users = User.all
  end
 
  def show
    # if current_user
    #   dashboard_path(current_user)
    # else 
    #   root_path
    # end
  end
 
  def edit
    if current_user
      user_profile_edit_path(current_user)
    else 
      root_path
    end 
  end

  def user_check
    if current_user
      render :json => current_user.to_json(:only => [:id, :email, :first_name, :last_name, :twtter, :location], :methods => [:headshot_url])
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

 
  private
    def set_user
      @user = User.find(params[:id])
    end
 
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :location, :twtter, :image, :password, :encrypted_password)
    end
end
