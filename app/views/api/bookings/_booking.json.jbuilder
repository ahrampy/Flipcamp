json.extract! booking, :id, :site_id, :check_in, :check_out, :num_guests,
    :created_at, :updated_at
# json.site_title booking.site_id.title