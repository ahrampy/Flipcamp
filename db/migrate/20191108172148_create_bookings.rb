class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :site_id, null: false
      t.integer :user_id, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
      t.integer :num_guests, null: false
      t.timestamps
    end

    add_index :bookings, :site_id
    add_index :bookings, :user_id
  end
end
