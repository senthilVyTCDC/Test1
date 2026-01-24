import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

function QuizGame() {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        api.get(`/quizzes/${id}`)
            .then(res => setQuiz(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleSelect = (questionId, option) => {
        setAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const handleSubmit = () => {
        api.post(`/quizzes/${id}/submit`, answers)
            .then(res => setScore(res.data))
            .catch(err => console.error(err));
    };

    if (!quiz) return <div>Loading...</div>;

    if (score !== null) {
        return (
            <div>
                <h1>Quiz Completed!</h1>
                <h2>Your Score: {score} / {quiz.questions.length}</h2>
                <Link to="/">
                    <button>Back to Quizzes</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{quiz.title}</h1>
            {quiz.questions.map(q => (
                <div key={q.id} className="question-card">
                    <h3>{q.text}</h3>
                    <div className="options">
                        {['A', 'B', 'C', 'D'].map(opt => {
                            const val = q[`option${opt}`]; // optionA, optionB...
                            return (
                                <button
                                    key={opt}
                                    className={`option-btn ${answers[q.id] === opt ? 'selected' : ''}`}
                                    onClick={() => handleSelect(q.id, opt)}
                                >
                                    {val}
                                </button>
                            )
                        })}
                    </div>
                </div>
            ))}
            <button style={{ marginTop: '20px', fontSize: '1.2em' }} onClick={handleSubmit}>
                Submit Quiz
            </button>
        </div>
    );
}

export default QuizGame;
