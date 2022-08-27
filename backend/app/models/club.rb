class Club < ApplicationRecord
    has_many :club_owners
    has_many :owners, through: :club_owners

    has_many :reviews
    has_many :reviewers, through: :reviews

    belongs_to :city
    # club model can now take an array of images
#     Call images.attach to add new images to an existing message:

    # @message.images.attach(params[:images])
    # Copy
    # Call images.attached? to determine whether a particular message has any images:

    # @message.images.attached?

    has_many_attached :images, dependent: :destroy
    
    # find out how to validate when adding attribute not on creation
    # validate :image_type

    def thumbnail(image_index)
        return self.images[image_index].variant(resize: '300x300!').processed
    end

    # private

    # def image_type
    #     if images.attached? == false
    #         errors.add(:images, "are missing!")
    #     end
    #     images.each do |image|
    #         if !image.content_type.in?('image/jpeg image/png')
    #             errors.add(:images, 'needs to be a JPEG or PNG')
    #         end
    #     end
    # end
end 
