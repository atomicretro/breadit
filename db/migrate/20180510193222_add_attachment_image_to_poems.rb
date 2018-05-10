class AddAttachmentImageToPoems < ActiveRecord::Migration[5.1]
  def self.up
    change_table :poems do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :poems, :image
  end
end
