class AddImgToSites < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :img, :string
  end
end
