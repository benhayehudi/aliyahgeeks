class AddPaperclipToPost < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :image
    add_attachment :posts, :image
  end
end
