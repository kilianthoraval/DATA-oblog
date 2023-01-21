-- Deploy oblog:1.create_table to pg

BEGIN;

CREATE TABLE IF NOT EXISTS public.label
(
    label_id SERIAL,
    route text NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT label_pkey PRIMARY KEY (label_id)
);

CREATE TABLE IF NOT EXISTS public.article
(
    article_id SERIAL,
    category text COLLATE pg_catalog."default" NOT NULL,
    slug text COLLATE pg_catalog."default" NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    excerpt text COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT article_pkey PRIMARY KEY (article_id),
    label_id INTEGER REFERENCES label (label_id)
);




COMMIT;
