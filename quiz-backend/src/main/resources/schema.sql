-- Create Quizzes Table
CREATE TABLE IF NOT EXISTS quizzes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255)
);

-- Create Questions Table
CREATE TABLE IF NOT EXISTS questions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255),
    option_a VARCHAR(255),
    option_b VARCHAR(255),
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    correct_answer VARCHAR(255),
    quiz_id BIGINT,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);
