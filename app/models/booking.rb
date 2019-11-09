class Booking < ApplicationRecord

    validates :site_id, :user_id, :check_in, :check_out, presence: true

    belongs_to :site
    belongs_to :user
    
end
