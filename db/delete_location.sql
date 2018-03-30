DELETE FROM activities 
WHERE category_id IN (
  SELECT id 
  FROM categories 
  WHERE location_id = ${location_id}
);

DELETE FROM categories
WHERE location_id = ${location_id};

DELETE FROM locations
WHERE id = ${location_id};

SELECT *
FROM locations
WHERE user_id = ${user_id};
