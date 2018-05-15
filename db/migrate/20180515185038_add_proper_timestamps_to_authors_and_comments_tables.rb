class AddProperTimestampsToAuthorsAndCommentsTables < ActiveRecord::Migration[5.1]
  def change
    remove_column :authors, :created_at, :datetime
    remove_column :comments, :updated_at, :datetime

    add_column :authors, :created_at, :datetime, null: false
    add_column :authors, :updated_at, :datetime, null: false
    add_column :comments, :created_at, :datetime, null: false
    add_column :comments, :updated_at, :datetime, null: false
  end
end
