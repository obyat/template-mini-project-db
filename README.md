# Coffee Shop Community Library (CSCL) Database
## Getting Started
This repository contains starter data for the CSCL Mini Project for the following database engines:
- MongoDB (NoSQL)
- MySQL
- PostgreSQL

<br>
<br>

### Mongo
[Install Mongo Server](https://docs.mongodb.com/manual/installation/)  

By default Mongo will not have access control enabled.  You will create users and grant permissions. 
Please refer to the Mongo [documentation](https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/index.html).

#### Importing the Database
You can find the CSCL Mongo database data in the `/mongo` directory. The easiest way to import this data is to use Mongo Compass.

1) Create a new database named `cscl` with a collection named `books`.
2) Click your way to the `books` collection under the new database.
3) Select `Add Data` then `import file`
4) For the 'File Path' select the `/mongo/cscl_db.json` file from this repository. For 'File Type' select `JSON`. Leave the options as-is.

<br>
<br>

### MariaDB (MySql)
[Install MariaDB](https://mariadb.com/get-started-with-mariadb/)

#### Importing the Database
You can find the CSCL SQL dump in `/mysql/cscl_db.sql`. There are many ways to import a MySQL database:

[Using DBeaver](https://dbeaver.com/docs/wiki/Backup-Restore/)  
[Using the Command Line](https://mariadb.com/kb/en/restoring-data-from-dump-files/)  

<br>
<br>

### PostgreSQL
[Install PostgreSQL on Mac](https://www.postgresqltutorial.com/install-postgresql-macos/)  
[Install PostgreSQL on Linux](https://www.postgresqltutorial.com/install-postgresql-linux/)  
[Install PostgreSQL on Windows](https://www.postgresqltutorial.com/install-postgresql/)  

#### Importing the Database
You can find the CSCL SQL dump in `/postgres/cscl_db.sql`. There are many ways to import a PostgreSQL database:

[Using DBeaver](https://dbeaver.com/docs/wiki/Backup-Restore/)  
[Using the Command Line](https://www.postgresqltutorial.com/postgresql-restore-database/)
<br>
<br>
## Tools

### Mongo
[Mongo Compass (Mongo GUI Application)](https://www.mongodb.com/try/download/compass)

### MariaDB / PostgreSQL
[DBeaver (SQL GUI Application)](https://dbeaver.io/)

### MariaDB
[MySQL WorkBench](https://dev.mysql.com/downloads/workbench/)