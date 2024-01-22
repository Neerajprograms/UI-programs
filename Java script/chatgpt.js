// Sample questions for the quiz
const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which programming language is used for web development?',
        options: ['Java', 'Python', 'JavaScript', 'C++'],
        correctAnswer: 'JavaScript'
    },
    // Add more questions as needed
];

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');

// Function to generate quiz questions dynamically
function generateQuiz() {
    let quizHTML = '';
    questions.forEach((question, index) => {
        quizHTML += `<div class="mb-3">
                        <h5>${index + 1}. ${question.question}</h5>
                        <div class="form-check">
                            ${question.options.map(option => `<input type="radio" class="form-check-input" name="q${index}" value="${option}">${option}<br>`).join('')}
                        </div>
                    </div>`;
    });
    quizContainer.innerHTML = quizHTML;
}

// Function to calculate the score and display results
function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });

    alert(`Your score: ${score} out of ${questions.length}`);
}

// Event listener for the submit button
submitButton.addEventListener('click', calculateScore);

// Generate quiz when the page loads
generateQuiz();
