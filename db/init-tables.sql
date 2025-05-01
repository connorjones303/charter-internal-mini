-- PostgreSQL accepts timestamps in the ISO format: 'YYYY-MM-DD HH:MI:SS'
CREATE TYPE ticket_action_type AS ENUM ('lost_customer', 'downgrade', 'upgrade', 'new_customer', 'deal_modify', 'return_customer');
CREATE TYPE employee_activity_type AS ENUM ('login', 'logout', 'other', 'ticket' );
CREATE TYPE plan_type AS ENUM('100mb', '500mb', '1gb');
CREATE TYPE sales_region AS ENUM('westcoast', 'mountain', 'gulfcoast', 'plains', 'midwest', 'eastcoast');
CREATE TYPE employee_privilege AS ENUM('sales_agent', 'manager');
CREATE TYPE competitors AS ENUM('comcast', 'dish', 'xfinity');


CREATE TABLE customers (
 id SERIAL PRIMARY KEY,
 account_name VARCHAR(100) NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 current_deal plan_type NOT NULL,
 plan_end_date TIMESTAMP NOT NULL,
 plan_start_date TIMESTAMP NOT NULL
);

CREATE TABLE employees (
 id SERIAL PRIMARY KEY,
 email VARCHAR(100) UNIQUE NOT NULL,
 employee_password VARCHAR(100) NOT NULL,
 privilege employee_privilege NOT NULL
);

CREATE TABLE internal_plans (
 id SERIAL PRIMARY KEY,
 plan_name plan_type NOT NULL,
 region sales_region NOT NULL,
 duration INTEGER NOT NULL,
 creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE tickets (
 id SERIAL PRIMARY KEY,
 employee_id INTEGER NOT NULL REFERENCES employees(id),
 deal_id INTEGER NOT NULL REFERENCES internal_plans(id),
 customer_id INTEGER NOT NULL REFERENCES customers(id),
 creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 activity ticket_action_type NOT NULL
);

CREATE TABLE employee_activity (
 id SERIAL PRIMARY KEY,
 employee_id INTEGER NOT NULL REFERENCES employees(id),
 activity employee_activity_type NOT NULL,
 activity_details VARCHAR(100),
 creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);


CREATE TABLE competitor_plans (
 id SERIAL PRIMARY KEY,
 company competitors NOT NULL,
 price INTEGER NOT NULL,
 plan plan_type NOT NULL
);