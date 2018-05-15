class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :annotations do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :poem_id, null: false
      t.integer :starting_character, null: false
      t.integer :ending_character, null: false
      t.timestamps
    end

    add_index :annotations, :user_id
    add_index :annotations, :poem_id
    add_index :annotations, :starting_character
    add_index :annotations, :ending_character
  end
end
