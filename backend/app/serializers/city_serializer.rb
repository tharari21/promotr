include Rails.application.routes.url_helpers

class CitySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :image

  def image
    return unless object.image.attached?
    object.image.blob.attributes.slice('filename', 'byte_size', 'id').merge(url: image_url(object.image))
  end
  def image_url(image)
    rails_blob_path(image, only_path: true)
  end

end
