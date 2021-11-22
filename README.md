# URL Shortner (sclr.ac) - Backend

This is the backend for the sclr.ac URL shortner. Full project specifications and requirements can be found on the project discussion link below 👇🏼 

https://github.com/scaleracademy/open-source-projects/discussions/3 

## Videos

Initial parts of this project was built over a YouTube liverstream. Those can be found here - 


- 📺 Part 1: Project Requirements and Setup 
    https://www.youtube.com/watch?v=WnrB2g5pHQ0 

## Database 

This project will need either a MySQL or a PostgreSQL database.
Use the following steps to setup your database. 

#### PostgreSQL 

```mysql
CREATE USER sclr_ac WITH ENCRYPTED PASSWORD 'sclrac';
CREATE DATABASE sclr_ac;
GRANT ALL PRIVILEGES ON DATABASE sclrac TO sclrac;
```

#### MySQL
```mysql 
CREATE DATABASE sclrac;
CREATE USER sclrac IDENTIFIED BY 'sclrac';
GRANT ALL PRIVILEGES ON sclrac.* TO sclrac;
```
