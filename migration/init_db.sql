-- je crèe un rôle pour gérer la BDD
CREATE ROLE admin_oblog WITH LOGIN PASSWORD 'oblog';

-- je crèe la BDD
CREATE DATABASE oblog OWNER admin_oblog;