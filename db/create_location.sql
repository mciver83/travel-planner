INSERT INTO locations (city, state, country, user_id)
VALUES (${city}, ${state}, ${country}, ${user_id});

SELECT *
FROM locations
WHERE user_id = ${user_id};