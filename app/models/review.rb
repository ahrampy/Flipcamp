class Review < ApplicationRecord

    validates :site_id, :user_id, :author, :recommend, :body, presence: true

    belongs_to :site
    belongs_to :user
end
