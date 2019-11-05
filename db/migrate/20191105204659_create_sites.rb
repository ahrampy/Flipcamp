class CreateSites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :type, null: false
      t.integer :cost, null: false
      t.integer :max_guests, null: false
      t.timestamps
    end
  end
end
