json.site do
  json.partial! '/api/sites/site', site: @site
end

@site.reviews.includes(:user_id).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end
