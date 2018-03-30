DELETE FROM activities 
WHERE category_id = ${category_id};

DELETE FROM categories
WHERE id = ${category_id};

SELECT * 
FROM categories
WHERE location_id = ${location_id} 