INSERT INTO quizzes (id, title, description) VALUES (1, 'General Knowledge', 'Test your general knowledge!');
INSERT INTO quizzes (id, title, description) VALUES (2, 'Science Trivia', 'Basic science questions.');

INSERT INTO questions (id, text, option_a, option_b, option_c, option_d, correct_answer, quiz_id) VALUES 
(1, 'What is the capital of France?', 'London', 'Berlin', 'Paris', 'Madrid', 'c', 1),
(2, 'Which planet is known as the Red Planet?', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'a', 1),
(3, 'What is H2O?', 'Gold', 'Water', 'Silver', 'Oxygen', 'b', 2);
