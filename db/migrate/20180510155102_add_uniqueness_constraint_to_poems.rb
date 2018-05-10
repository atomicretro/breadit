class AddUniquenessConstraintToPoems < ActiveRecord::Migration[5.1]
  def change
    remove_index :poems, column: :title
    add_index :poems, [:title, :author_id], unique: true
  end
end
