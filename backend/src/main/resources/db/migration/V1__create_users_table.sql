CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    
    -- Address fields
    street VARCHAR(255) NOT NULL,
    suite VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zipcode VARCHAR(255) NOT NULL,
    lat DECIMAL NOT NULL,
    lng DECIMAL NOT NULL,
    
    -- Company fields
    company_name VARCHAR(255) NOT NULL,
    catch_phrase VARCHAR(255) NOT NULL,
    bs VARCHAR(255) NOT NULL
); 