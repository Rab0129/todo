DROP DATABASE test_yasai;
CREATE DATABASE test_yasai;

\c test_yasai --データベースに移動

CREATE TABLE leaf_yasai (
  id          INTEGER      PRIMARY KEY,
  title       VARCHAR(2)   NOT NULL, 
  memo        VARCHAR(10),
  create_date timestamp(3),
  update_date timestamp(3) 
);

INSERT INTO leaf_yasai VALUES(1, 'aa', 'こんにちは', '2001-01-29 00:00:00', '2022-05-01 06:00:00'); 