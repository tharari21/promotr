class City < ApplicationRecord
    has_many :clubs
    has_one_attached :image, dependent: :destroy
end
