-- Drop tables if they exist
DROP TABLE IF EXISTS users CASCADE;

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    website VARCHAR(255),
    
    -- Address fields
    street VARCHAR(255),
    suite VARCHAR(255),
    city VARCHAR(255),
    zipcode VARCHAR(255),
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    
    -- Company fields
    company_name VARCHAR(255),
    catch_phrase VARCHAR(255),
    bs VARCHAR(255)
); 