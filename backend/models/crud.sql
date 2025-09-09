CREATE DATABASE CrudApp;

CREATE TABLE crud(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL, 
    job VARCHAR(30) NOT NULL, 
    status BOOLEAN DEFAULT true, 
    created_at TIMESTAMPTZ NOT NULL
);

INSERT INTO crud (name, job, status, created_at) VALUES ('John Doe', 'Software Engineer', true, NOW());
INSERT INTO crud (name, job, status, created_at) VALUES ('Jane Smith', 'Data Scientist', true, NOW());
INSERT INTO crud (name, job, status, created_at) VALUES ('Alice Johnson', 'Product Manager', false, NOW());
INSERT INTO crud (name, job, status, created_at) VALUES ('Bob Brown', 'UX Designer', true, NOW());
