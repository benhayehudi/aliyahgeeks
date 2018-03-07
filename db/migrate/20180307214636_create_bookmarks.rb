class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.integer :post_id, :integer
      t.integer :user_id, :integer 
      t.timestamps
    end
  end
end
