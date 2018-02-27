class UpdateUsers < ActiveRecord::Migration[5.1]
  def change
      add_column :users, :picture, :binary, :limit => 2.megabyte
      add_column :users, :location, :text
      add_column :users, :twtter, :text
      add_column :users, :first_name, :text 
      add_column :users, :last_name, :text
  end
end
