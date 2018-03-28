INSERT INTO users ( name, auth_id )
VALUES (${name}, ${auth_id})

RETURNING *;