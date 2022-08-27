include Rails.application.routes.url_helpers
class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :city
  has_many :images
  has_many :reviews

  def image_url(image)
    rails_blob_path(image, only_path: true)
  end

  def images
    return unless object.images.attached?
    object.images.map do |image|
    images.blob.attributes
      .slice('filename', 'byte_size', 'id')
      .merge(url: image_url(image))
    end
  end
end
