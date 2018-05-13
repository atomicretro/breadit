class AddNullConstraintToCommentsTable < ActiveRecord::Migration[5.1]
  def change
    change_column_null :comments, :commentable_type, false
    change_column_null :comments, :commentable_id, false
  end
end
