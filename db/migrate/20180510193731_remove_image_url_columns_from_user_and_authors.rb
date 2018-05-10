class RemoveImageUrlColumnsFromUserAndAuthors < ActiveRecord::Migration[5.1]
  def change
    remove_column :poems, :image_url
    remove_column :authors, :image_url
  end
end
