class Review < ApplicationRecord
    belongs_to :reviewee, :class_name => "Club", :foreign_key => "club_id"
    belongs_to :reviewer, :class_name => "User", :foreign_key => "user_id"
end
