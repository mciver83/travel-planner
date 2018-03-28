create table users (
    id SERIAL PRIMARY KEY,
    name varchar,
    email varchar,
    auth_id varchar
);

create table locations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    city varchar,
    state varchar,
    country varchar
);

create table categories (
    id SERIAL PRIMARY KEY,
    location_id INTEGER REFERENCES locations,
    name varchar
);

create table activities (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES categories,
    name varchar,
    image_url text
);