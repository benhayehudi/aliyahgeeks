class Comment < ApplicationRecord 
  belongs_to :post 
  belongs_to :user

  def author_info
    @author = User.find_by(id: self.user_id)
  end
end