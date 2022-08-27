class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :comment, :reviewer
  has_many :users
end
