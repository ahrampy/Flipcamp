class Site < ApplicationRecord

    validates :user_id, :title, :lat, :lng,
        :site_type, :cost, :max_guests, presence: true

    belongs_to :user
    has_many :bookings
    has_many :reviews
    has_many_attached :photos

end
