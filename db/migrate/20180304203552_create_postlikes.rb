class CreatePostlikes < ActiveRecord::Migration[5.1]
  def change
    create_table :postlikes do |t|

      t.timestamps
    end
  end
end
