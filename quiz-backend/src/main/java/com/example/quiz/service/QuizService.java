package com.example.quiz.service;

import com.example.quiz.entity.Quiz;
import com.example.quiz.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Optional<Quiz> getQuizById(Long id) {
        return quizRepository.findById(id);
    }

    public int calculateScore(Long quizId, java.util.Map<Long, String> answers) {
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(() -> new RuntimeException("Quiz not found"));
        int score = 0;
        for (com.example.quiz.entity.Question q : quiz.getQuestions()) {
            if (answers.containsKey(q.getId())) {
                String selectedAnswer = answers.get(q.getId());
                if (selectedAnswer != null && selectedAnswer.equalsIgnoreCase(q.getCorrectAnswer())) {
                    score++;
                }
            }
        }
        return score;
    }
}
