class Newcommentstable < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :post_id
      t.integer :user_id
      t.string :text
      t.boolean :publish, :default => true
      t.timestamps
    end
  end
end
