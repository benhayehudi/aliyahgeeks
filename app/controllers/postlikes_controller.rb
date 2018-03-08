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
    postlike = Postlike.find_or_initialize_by(postlike_params)
    if postlike.persisted?
      if postlike.hearts > 0
        postlike.hearts = 0
        postlike.save
      elsif postlike.hearts = 0
        postlike.hearts = 1
        postlike.save 
      end
      if postlike.likes > 0
        postlike.likes = 0
        postlike.save
      elsif postlike.likes = 0
        postlike.likes = 1
        postlike.save 
      end
      if postlike.stars > 0
        postlike.stars = 0
        postlike.save
      elsif postlike.stars = 0
        postlike.stars = 1
        postlike.save 
      end
    else 
      postlike.save 
    end
  end 

  private 

  def postlike_params
    params.permit(:post_id, :user_id, :likes, :hearts, :hands)
  end

end
