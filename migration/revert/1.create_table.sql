-- Revert oblog:1.create_table from pg

BEGIN;

DROP TABLE article, label;

COMMIT;
