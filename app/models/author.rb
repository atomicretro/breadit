# == Schema Information
#
# Table name: authors
#
#  id   :integer          not null, primary key
#  name :string           not null
#

class Author < ApplicationRecord
  validates :name, presence: true

  has_many :poems,
    class_name: 'Poem',
    primary_key: :id,
    foreign_key: :author_id
end
