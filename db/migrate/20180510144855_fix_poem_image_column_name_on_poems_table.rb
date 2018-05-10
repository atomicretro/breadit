class FixPoemImageColumnNameOnPoemsTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :poems, :poem_image, :image_url
  end
end
