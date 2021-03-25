class CreateFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.string :email
      t.string :name
      t.string :avatar
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
