CREATE TABLE Clients (
    client_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    date_of_birth DATE,
    card_information TEXT,
    interests TEXT,
    email_address VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20)
);

CREATE TABLE Ports (
    port_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    country VARCHAR(100),
    region VARCHAR(100),
    city VARCHAR(100)
);

CREATE TABLE Nautical_Events (
    event_id SERIAL PRIMARY KEY,
    number_of_boats INT,
    number_of_places INT,
    departure_port_id INT REFERENCES Ports(port_id),
    starting_date DATE
);

CREATE TABLE Tickets (
    ticket_id SERIAL PRIMARY KEY,
    client_id INT REFERENCES Clients(client_id),
    event_id INT REFERENCES Nautical_Events(event_id),
    booking_date DATE,
    price DECIMAL(10,2),
    ticket_type VARCHAR(20)
);

CREATE TABLE Skippers (
    skipper_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    experience_courses INT,
    experience_weeks INT,
    home_city VARCHAR(100),
    country_of_work VARCHAR(100),
    region VARCHAR(100),
    season_start_date DATE,
    season_end_date DATE
);

CREATE TABLE Skipper_Availability (
    availability_id SERIAL PRIMARY KEY,
    skipper_id INT REFERENCES Skippers(skipper_id),
    week_start_date DATE,
    week_end_date DATE,
    availability_status VARCHAR(20)
);

CREATE TABLE Event_Skippers (
    event_id INT REFERENCES Nautical_Events(event_id),
    skipper_id INT REFERENCES Skippers(skipper_id),
    PRIMARY KEY (event_id, skipper_id)
);

CREATE TABLE Restaurant_Recommendations (
    restaurant_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    port_id INT REFERENCES Ports(port_id),
    phone_number VARCHAR(20)
);

ALTER TABLE nautical_events
ADD COLUMN event_name VARCHAR(255);

ALTER TABLE Tickets
DROP CONSTRAINT tickets_client_id_fkey,
ADD CONSTRAINT tickets_client_id_fkey
FOREIGN KEY (client_id) REFERENCES Clients(client_id) ON DELETE CASCADE;

CREATE TABLE ClientDetails (
    client_id INT PRIMARY KEY,
    trainer_evaluation VARCHAR(255),
    skipper_material BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (client_id) REFERENCES Clients(client_id) ON DELETE CASCADE
);
