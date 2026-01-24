# Student Quiz App

A simple full-stack application with Spring Boot and React.

## Quick Start

### 1. Database
Create the MySQL database:
```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS student_quiz_db;"
```

### 2. Backend
Configure database credentials in `quiz-backend/src/main/resources/application.properties`.
Run the backend:
```bash
cd quiz-backend
mvn spring-boot:run
```

### 3. Frontend
Run the frontend:
```bash
cd quiz-frontend
npm install
npm run dev
```

See `walkthrough.md` in artifacts (or I can copy it here) for more details.
