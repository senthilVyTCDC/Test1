@echo off
echo Starting Quiz Backend...
set "MAVEN_HOME=%~dp0apache-maven-3.9.6"
set "PATH=%MAVEN_HOME%\bin;%PATH%"

cd quiz-backend
mvn spring-boot:run
pause
