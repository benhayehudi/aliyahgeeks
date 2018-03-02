require 'pry'
class PostsController < ApplicationController

skip_before_action :verify_authenticity_token
before_action :set_post, only: [:show, :update, :destroy]
before_action :set_user, only: [:create, :update]

def new
end

def create
  if @user
    binding.pry
    post = @user.posts.build(post_params)
    if post.save
      render json: post
    else
      render json: {message: "Post not saved"}, status: 400
    end
  else
    render json: {status: 'error', message: "User not logged in"}
  end
end

def update
  if @user && @user.posts.include?(@post)
    if @post.update(post_params)
      render json: @post
    else
      render json: {message: "Post not saved"}, status: 400
    end
  else
    render json: {status: 'error', message: "User not logged in"}
  end
end


private

def set_user
  @user = User.find_by(id: params[:id])
end

def set_post
  @post = Post.find_by(id: params[:id])
end

def post_params
  params.require('post').permit(:title, :tags, :image, :publish, :user_id, draft_json: {})
end

end
