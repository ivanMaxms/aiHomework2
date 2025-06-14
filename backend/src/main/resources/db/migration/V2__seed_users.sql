-- Using BCrypt hashed password 'password123' for all users
INSERT INTO users (
    name, username, password, email, phone, website,
    street, suite, city, zipcode, lat, lng,
    company_name, catch_phrase, bs
) VALUES
    (
        'Leanne Graham',
        'Bret',
        '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'Sincere@april.biz',
        '1-770-736-8031 x56442',
        'hildegard.org',
        'Kulas Light',
        'Apt. 556',
        'Gwenborough',
        '92998-3874',
        '-37.3159',
        '81.1496',
        'Romaguera-Crona',
        'Multi-layered client-server neural-net',
        'harness real-time e-markets'
    ),
    (
        'Ervin Howell',
        'Antonette',
        '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'Shanna@melissa.tv',
        '010-692-6593 x09125',
        'anastasia.net',
        'Victor Plains',
        'Suite 879',
        'Wisokyburgh',
        '90566-7771',
        '-43.9509',
        '-34.4618',
        'Deckow-Crist',
        'Proactive didactic contingency',
        'synergize scalable supply-chains'
    ),
    (
        'Clementine Bauch',
        'Samantha',
        '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'Nathan@yesenia.net',
        '1-463-123-4447',
        'ramiro.info',
        'Douglas Extension',
        'Suite 847',
        'McKenziehaven',
        '59590-4157',
        '-68.6102',
        '-47.0653',
        'Romaguera-Jacobson',
        'Face to face bifurcated interface',
        'e-enable strategic applications'
    ); 