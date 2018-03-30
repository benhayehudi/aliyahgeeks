class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def logged_in?
    current_user != nil
  end

  def after_sign_in_path_for(user)
    dashboard_path(current_user)
  end
end
