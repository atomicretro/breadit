# == Schema Information
#
# Table name: authors
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Author < ApplicationRecord
  validates :name, presence: true

  has_attached_file :image, default_url: "smiling.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :poems,
    class_name: 'Poem',
    primary_key: :id,
    foreign_key: :author_id
end
