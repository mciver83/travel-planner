INSERT INTO categories (location_id, name)
VALUES (${location_id}, ${name});

SELECT *
FROM categories
WHERE location_id = ${location_id};