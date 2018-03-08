class AddUserIdToPostLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :postlikes, :user_id, :integer
  end
end
