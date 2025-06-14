-- Use this file to seed your database with initial data.

-- Create admin user with a securely hashed password
-- The password is "SecureAdminPass123"
INSERT INTO users (id, username, password, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs)
VALUES (1, 'admin', '$2a$10$3RqMuYNIm2VHRaP1BA5ILuIlvGw24Bbg5LMgdt9JZSUHigAgQEek2', 'Admin User', 'admin@example.com', '123-456-7890', 'admin.com', 'Admin Street', 'Suite 100', 'Admin City', '12345', 0, 0, 'Admin Inc.', 'Admin Catchphrase', 'Admin BS')
ON CONFLICT (id) DO NOTHING;

-- Seed 10 more users (password is 'password' encoded with BCrypt: $2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W)
INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(2, 'Leanne Graham', 'Leanne Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', 'hildegard.org', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', -37.3159, 81.1496, 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(3, 'Ervin Howell', 'Ervin Howell', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net', 'Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771', -43.9509, -34.4618, 'Deckow-Crist', 'Proactive didactic contingency', 'synergize scalable supply-chains', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(4, 'Clementine Bauch', 'Clementine Bauch', 'Nathan@yesenia.net', '1-463-123-4447', 'ramiro.info', 'Douglas Extension', 'Suite 847', 'McKenziehaven', '59590-4157', -68.6102, -47.0653, 'Romaguera-Jacobson', 'Face to face bifurcated interface', 'e-enable strategic applications', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(5, 'Patricia Lebsack', 'Patricia Lebsack', 'Julianne.OConner@kory.org', '493-170-9623 x156', 'kale.biz', 'Hoeger Mall', 'Apt. 692', 'South Elvis', '53919-4257', 29.4572, -164.2990, 'Robel-Corkery', 'Multi-tiered zero tolerance productivity', 'transition cutting-edge web services', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(6, 'Chelsey Dietrich', 'Chelsey Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289', 'demarco.info', 'Skiles Walks', 'Suite 351', 'Roscoeview', '33263', -31.8129, 62.5342, 'Keebler LLC', 'User-centric fault-tolerant solution', 'revolutionize end-to-end systems', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(7, 'Mrs. Dennis Schulist', 'Mrs. Dennis Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478 x6430', 'ola.org', 'Norberto Crossing', 'Apt. 950', 'South Christy', '23505-1337', -71.4197, 71.7478, 'Considine-Lockman', 'Synchronised bottom-line interface', 'e-enable innovative applications', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(8, 'Kurtis Weissnat', 'Kurtis Weissnat', 'Telly.Hoeger@billy.biz', '210.067.6132', 'elvis.io', 'Rex Trail', 'Suite 280', 'Howemouth', '58804-1099', 24.8918, 21.8984, 'Johns Group', 'Configurable multimedia task-force', 'generate enterprise e-tailers', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(9, 'Nicholas Runolfsdottir V', 'Nicholas Runolfsdottir V', 'Sherwood@rosamond.me', '586.493.6943 x140', 'jacynthe.com', 'Ellsworth Summit', 'Suite 729', 'Aliyaview', '45169', -14.3990, -120.7677, 'Abernathy Group', 'Implemented secondary concept', 'e-enable extensible e-tailers', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(10, 'Glenna Reichert', 'Glenna Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794 x41206', 'conrad.com', 'Dayna Park', 'Suite 449', 'Bartholomebury', '76495-3109', 24.3180, -168.8889, 'Yost and Sons', 'Switchable contextually-based project', 'aggregate real-time technologies', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;

INSERT INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password) VALUES
(11, 'Clementina DuBuque', 'Clementina DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804', 'ambrose.net', 'Kattie Turnpike', 'Suite 198', 'Lebsackbury', '31428-2261', -38.2386, 57.2232, 'Hoeger LLC', 'Centralized empowering task-force', 'target end-to-end models', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W') ON CONFLICT (id) DO NOTHING;
