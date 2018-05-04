class PostsController < ApplicationController

skip_before_action :verify_authenticity_token
before_action :set_post, only: [:show, :update, :destroy, :edit]
before_action :set_user, only: [:create, :update, :edit, :tag_admin, :tag_new]

def index 
  @posts = Post.all.where(publish: true).order(created_at: :desc).limit(5)
  render :json => @posts
end

def new
end

def show 
  post_info = { :post => @post, :author => @post.author_info, :post_picture => @post.post_pic_url, :tags => @post.tags }
  render :json => post_info.to_json
end

def view
end

def create
  if @user
    post = @user.posts.build(post_params)
    if post.save
      PostTag.create(post_id: post.id, tag_id: params[:post][:tag])
      UserMailer.new_post_email(post).deliver_later
      post.tweet_new_post
      render json: post
    else
      render json: {message: "Post not saved"}, status: 400
    end
  else
    render json: {status: 'error', message: "User not logged in"}
  end
end

def update
  hash = post_params.reject { |k, v| v.blank? }
  if @post.update_attributes(hash)
    edit_post_path(@post)
  else
    edit_post_path(@post)
  end
end

def edit 
end

def reaction
  postlikes = Postlike.find_or_create_by(post_id: params[:postId])
  postlikes.update(postlikes_params)
  render json: postlikes
end

def tag_admin 
  @tags = Tag.all
  if current_user.admin == true
  else
    redirect_to user_login_path
  end
end

def tag_new 
  if current_user.admin == true
    tag = Tag.new(name: params[:tagadd]) 
    tag.save
    redirect_to tags_admin_path
  else 
    render json: {status: 'error', message: "You do not have permission to add a tag"} 
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
  params.require('post').permit(:title, :image, :publish, :user_id, draft_json: {})
end

def postlikes_params 
  params.permit(:post_id, :likes, :hearts, :hands, :post)
end

end
