class AddLikesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :postlikes do |t|
      t.integer :post_id
      t.integer :likes, :default => 0
      t.integer :hearts, :default => 0
      t.integer :hands, :default => 0
 
      t.timestamps
    end
  end
end
