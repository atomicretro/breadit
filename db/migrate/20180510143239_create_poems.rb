class CreatePoems < ActiveRecord::Migration[5.1]
  def change
    create_table :poems do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.string :poem_image, null: false
      t.timestamps
    end

    add_index :poems, :title
    add_index :poems, :author_id
  end
end
