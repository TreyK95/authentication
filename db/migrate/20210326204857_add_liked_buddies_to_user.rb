class AddLikedBuddiesToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :liked_buddies, :text
  end
end
