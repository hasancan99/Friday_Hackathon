DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_edited TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES user_account ("user_id")
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    expiry_date TIMESTAMP NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES user_account ("user_id")
);


INSERT INTO user_account (username, password)
VALUES 
('User1', 'password1'),
('User2', 'password2'),
('User3', 'password3');


INSERT INTO post (user_id, title, content, created_at, last_edited)
VALUES 
(1, 'First Post', 'This is the content of the first post.', '2023-04-21' , CURRENT_TIMESTAMP),
(2, 'Second Post', 'This is the content of the second post.', '2022-09-06', CURRENT_TIMESTAMP),
(3, 'Third Post', 'This is the content of the third post.', '2023-06-01', CURRENT_TIMESTAMP),
(1, 'another post', 'i am another post', '2021-12-13', CURRENT_TIMESTAMP);


INSERT INTO token (user_id, token, expiry_date)
VALUES 
(1, '123e4567-e89b-12d3-a456-426614174000', CURRENT_TIMESTAMP + INTERVAL '7 day'),
(2, '123e4567-e89b-12d3-a456-426614174001', CURRENT_TIMESTAMP + INTERVAL '7 day'),
(3, '123e4567-e89b-12d3-a456-426614174002', CURRENT_TIMESTAMP + INTERVAL '7 day');

