# == Schema Information
#
# Table name: poems
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :text             not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Poem < ApplicationRecord
  validates :title, :body, :author, presence: true
  validates :title, uniqueness: { scope: :author_id,
    message: 'poem already exists' }

  has_attached_file :image, default_url: "smiling.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: 'Author',
    primary_key: :id,
    foreign_key: :author_id

  has_many :comments,
    as: :commentable
end
