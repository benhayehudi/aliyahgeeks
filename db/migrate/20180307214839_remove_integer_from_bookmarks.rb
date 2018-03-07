class RemoveIntegerFromBookmarks < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookmarks, :integer
  end
end
