-- H2-compatible syntax using MERGE
MERGE INTO users (id, username, password, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs)
KEY(id)
VALUES (1, 'admin', '$2a$10$eSP.hrM0dASLDDIevySu9uWmauRIL4rXAtDSB7mOH.Mf6ODJjCDZi', 'Admin User', 'admin@example.com', '123-456-7890', 'admin.com', 'Admin Street', 'Suite 100', 'Admin City', '12345', 0, 0, 'Admin Inc.', 'Admin Catchphrase', 'Admin BS');

MERGE INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password)
KEY(id)
VALUES (2, 'Leanne Graham', 'Leanne Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', 'hildegard.org', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', -37.3159, 81.1496, 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W');

MERGE INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password)
KEY(id)
VALUES (3, 'Ervin Howell', 'Ervin Howell', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net', 'Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771', -43.9509, -34.4618, 'Deckow-Crist', 'Proactive didactic contingency', 'synergize scalable supply-chains', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W');

MERGE INTO users (id, username, name, email, phone, website, street, suite, city, zipcode, lat, lng, company_name, catch_phrase, bs, password)
KEY(id)
VALUES (4, 'Clementine Bauch', 'Clementine Bauch', 'Nathan@yesenia.net', '1-463-123-4447', 'ramiro.info', 'Douglas Extension', 'Suite 847', 'McKenziehaven', '59590-4157', -68.6102, -47.0653, 'Romaguera-Jacobson', 'Face to face bifurcated interface', 'e-enable strategic applications', '$2a$10$GiseH.Y3y9gKkGvAHRx3aO5S5s9g9y0.y.R.QW.6U/v2.8J8.pY/W'); 