class BookmarksController < ApplicationController
 
  skip_before_action :verify_authenticity_token

  def create
    bookmark = Bookmark.find_or_initialize_by(bookmark_params)
    bookmark.persisted? ? bookmark.destroy : bookmark.save
  end 

  private 

  def bookmark_params
    params.require('bookmark').permit(:post_id, :user_id)
  end

end
