CREATE TABLE conversations(
  id serial PRIMARY KEY,
  createdAt timestamp DEFAULT current_timestamp,
  updatedAt timestamp DEFAULT current_timestamp
);

CREATE TABLE catalogs(
  id serial PRIMARY KEY,
  userId int,
  catalogName varchar(255) NOT NULL CHECK(catalogName != ''),
  FOREIGN KEY(userId) REFERENCES "Users"(id)
);

CREATE TABLE conversations_to_catalogs(
  conversationId int REFERENCES conversations(id),
  catalogId int REFERENCES catalogs(id)
);

CREATE TABLE messages(
  id serial PRIMARY KEY,
  sender int,
  body varchar(255) NOT NULL CHECK(body != ''),
  conversation int REFERENCES conversations(id),
  createdAt timestamp DEFAULT current_timestamp,
  updatedAt timestamp DEFAULT current_timestamp,
  FOREIGN KEY (sender) REFERENCES "Users"(id)
);

CREATE TABLE listsParticipants(
  id serial PRIMARY KEY,
  userId int REFERENCES "Users"(id),
  blackList boolean NOT NULL,
  favouriteList boolean NOT NULL,
  conversationId int REFERENCES conversations(id)
);

INSERT INTO conversations(createdAt, updatedAt) VALUES
('2024-07-12T16:42:10.131+00:00', '2024-08-10T11:35:31.931+00:00');

INSERT INTO catalogs(userId, catalogName) VALUES
(1, 'Catalog'),
(1, 'Catalog2');

INSERT INTO conversations_to_catalogs(conversationId, catalogId) VALUES
(1, 1),
(1, 2);

INSERT INTO messages(sender, body, createdAt, updatedAt, conversation) VALUES
(2, 'Privet', '2024-07-12T16:42:10.157+00:00', '2024-07-12T16:42:10.157+00:00', 1),
(1, 'Privet', '2024-07-12T16:42:54.812+00:00', '2024-07-12T16:42:54.812+00:00', 1),
(1, 'Do you have money?', '2024-07-12T16:43:41.443+00:00', '2024-07-12T16:43:41.443+00:00', 1),
(1, 'Hello again', '2024-07-22T07:00:52.857+00:00', '2024-07-22T07:00:52.857+00:00', 1),
(2, 'Hello, Buyer', '2024-07-22T10:30:14.077+00:00', '2024-07-22T10:30:14.077+00:00', 1),
(2, 'Message', '2024-07-22T10:31:12.717+00:00', '2024-07-22T10:31:12.717+00:00', 1),
(2, 'hi', '2024-07-24T11:50:24.500+00:00', '2024-07-24T11:50:24.500+00:00', 1),
(2, 'Hello again', '2024-07-24T11:50:30.489+00:00', '2024-07-24T11:50:30.489+00:00', 1),
(2, 'паровоз', '2024-08-10T11:20:03.448+00:00', '2024-08-10T11:20:03.448+00:00', 1),
(1, 'паровоз', '2024-08-10T11:35:31.935+00:00', '2024-08-10T11:35:31.935+00:00', 1);

INSERT INTO listsparticipants(userId, blackList, favouriteList, conversationId) VALUES
(1, false, false, 1),
(2, false, false, 1);