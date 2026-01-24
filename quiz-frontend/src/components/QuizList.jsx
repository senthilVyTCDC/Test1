import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

function QuizList() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        api.get('/quizzes')
            .then(res => setQuizzes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Available Quizzes</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {quizzes.map(quiz => (
                    <div key={quiz.id} className="card">
                        <h2>{quiz.title}</h2>
                        <p>{quiz.description}</p>
                        <Link to={`/quiz/${quiz.id}`}>
                            <button style={{ marginTop: '10px' }}>Start Quiz</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizList;
