class Site < ApplicationRecord

    validates :user_id, :title, :lat, :lng, :type, :cost, :max_guests, prensence: true

    belongs_to :user

end
