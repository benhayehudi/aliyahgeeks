class AddDraftJsToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :user_id, :integer
    add_column :posts, :draft_json, :json
    change_column :posts, :publish, :boolean, :default => false
    remove_column :posts, :author
  end
end
