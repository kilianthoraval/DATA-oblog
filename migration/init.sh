export PGUSER=spedata

# je supprime la BDD
dropdb oblog

# je supprime l'utilisateur
dropuser admin_oblog

# je veux lancer le script
psql -f init_db.sql -d postgres

# j'initialise SQITCH
sqitch init ocolis --engine pg --target db:pg:oblog