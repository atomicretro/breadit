# == Schema Information
#
# Table name: poems
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Poem < ApplicationRecord
  validates :title, :body, :author_id, :image_url, presence: true
  validates :title, uniqueness: { scope: :author_id,
    message: 'poem already exists' }

  belongs_to :author,
    class_name: 'Author',
    primary_key: :id,
    foreign_key: :author_id
end
