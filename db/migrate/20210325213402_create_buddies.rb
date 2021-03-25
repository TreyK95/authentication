class CreateBuddies < ActiveRecord::Migration[6.1]
  def change
    create_table :buddies do |t|
      t.string :name
      t.string :email
      t.string :avatar

      t.timestamps
    end
  end
end
