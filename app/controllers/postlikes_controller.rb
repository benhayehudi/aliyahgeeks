require 'pry'
class PostlikesController < ApplicationController
 
  skip_before_action :verify_authenticity_token

  def show
    postlike_count = []
    postlikes = Postlike.where(post_id: params[:postId])
    postlikes.each do |postlike| 
      postlike_count << [
        :hearts => postlike.count_hearts, :hands => postlike.count_hands, :stars => postlike.count_stars
      ]
    end
    render :json => postlike_count
  end

  def create
    postlike = Postlike.find_or_initialize_by(post_id: params[:post_id], user_id: params[:user_id])
    if params.has_key?(:hearts) 
      type = "hearts"
    elsif params.has_key?(:likes)
      type = "likes" 
    elsif params.has_key?(:hands)
      type = "hands"
    else 
      render :json => {:error => "No like type specified."}
    end
    postlike.reaction(type)
    render :json => postlike
  end 

  private 

  def postlike_params
    params.permit(:post_id, :user_id, :likes, :hearts, :hands)
  end

end
