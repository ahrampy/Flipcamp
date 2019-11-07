class ChangeSitesColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :sites, :type, :site_type
  end
end
