class AddColumnToSites < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :description, :string
  end
end
