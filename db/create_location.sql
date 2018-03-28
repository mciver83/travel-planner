INSERT INTO locations (city, state, country, user_id)
VALUES (${city}, ${state}, ${country}, ${user_id})

RETURNING *;