class CommentsController < ApplicationController

  skip_before_action :verify_authenticity_token
  before_action :set_post, only: [:show, :destroy, :create]
  before_action :set_user, only: [:create, :destroy]

  def show
    comments_authors = []
    comments = Comment.where(post_id: params[:id], publish: true)
    comments.each do |comment| 
      comments_authors << [:comment => comment, :author => comment.author_info]
    end
    render :json => comments_authors
  end

  def create
    if @user
      comment = @user.comments.build(comment_params)
      if comment.save
        render json: comment
      else
        render json: {message: "Comment not saved"}, status: 400
      end
    else
      render json: {status: 'error', message: "User not logged in"}
    end
  end


  private

  def set_user
    @user = User.find_by(id: params[:user_id])
  end

  def set_post
    @post = Post.find_by(id: params[:post_id])
  end

  def comment_params
    params.permit(:text, :user_id, :post_id)
  end
end
