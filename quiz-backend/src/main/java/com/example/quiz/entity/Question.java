package com.example.quiz.entity;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "questions")
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;

    // In a real app, you might hide this from the client, but for simplicity we'll
    // send it or Validate on backend.
    // For this simple version, I'll keep it here but we can verify answers on
    // backend.
    private String correctAnswer;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    @JsonIgnore
    private Quiz quiz;
}
