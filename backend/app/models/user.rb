class User < ApplicationRecord
    has_many :club_owners
    has_many :clubs, through: :club_owners

    has_many :reviews
    has_many :reviewees, through: :reviews
    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true, uniqueness: true
    validates :password,
                length: { minimum: 6 },
                if: -> { new_record? || !password.nil? }
end
