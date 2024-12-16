const questions = [
    {
        question: "Quelle est la principale fonction d'un CV?",
        answers: [
            "Informer sur ses loisirs",
            "Décrire sa personnalité",
            "Présenter son parcours professionnel et académiqueconst questions"
        ],
        correct: 2
    },
    {
        question: "Quel format de fichier est le plus courant pour envoyer un CV par email ?",
        answers: [
            ".txt",
            ".pdf",
            ".jpg"
        ],
        correct: 1
    },
    {
        question: "Quel élément est indispensable dans un CV?",
        answers: [
            "Un logo personnalisé",
            "Les coordonnées personnelles",
            "Une citation inspirante"
        ],
        correct: 1
    },
    {
        question: "Quelle section doit figurer en haut du CV ?",
        answers: [
            "Coordonnées personnelles ",
            "Expériences professionnelles",
            "Loisirs"
        ],
        correct: 0
    },
    {
        question: "Que signifie 'compétence professionnelle' dans un CV",
        answers: [
            "Un diplôme obtenu",
            "Une qualité personnelle",
            "Une capacité technique ou comportementale acquise"
        ],
        correct: 2
    },
    {
        question: "Quel est le but principal d'une lettre de motivation ?",
        answers: [
            "Présenter ses hobbies",
            "Convaincre le recruteur de votre adéquation au poste ",
            "Détailler son parcours académique"
        ],
        correct: 1
    },
    {
        question: "Que signifie 'expérience professionnelle' sur un CV ?",
        answers: [
            "Un diplôme obtenu",
            "Une activité bénévole uniquement",
            "Un emploi ou un stage effectué"
        ],
        correct: 2
    },
    {
        question: "Que faut-il éviter dans un CV ?",
        answers: [
            "Des informations claires et précises",
            "Des langues maîtrisées",
            "Des fautes d'orthographe"
        ],
        correct: 2
    },
    {
        question: "Quel est l'objectif d'un portfolio professionnel?",
        answers: [
            "Présenter ses projets et réalisations",
            "Partager des idées créatives non abouties",
            "Lister ses notes scolaires"
        ],
        correct: 0
    },
    {
        question: "Quelle information n'est pas nécessaire sur un CV moderne ?",
        answers: [
            "L'adresse e-mail",
            "L'adresse postale complète",
            "Le profil LinkedIn"
        ],
        correct: 1
    }
];

const quiz = document.querySelector('#quiz');
const scoreMessage = document.querySelector('#score');
let correctAnswers = 0;
let selectedAnswers = Array(questions.length).fill(null);

// Check if scoreMessage is found
if (!scoreMessage) {
    console.error('Error: #score element not found in the DOM');
}

if (!quiz) {
    console.error('Error: #quiz element not found in the DOM');
}

// Render the questions and answers dynamically
questions.forEach((item, index) => {
    const quizItem = document.createElement('div');
    quizItem.className = 'quiz-item';

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = item.question;
    quizItem.appendChild(questionTitle);

    const answerList = document.createElement('dl');
    item.answers.forEach((answer, idx) => {
        const option = document.createElement('dt');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question-${index}`;  // Corrected to use backticks
        radio.value = idx;

        radio.addEventListener('change', () => {
            selectedAnswers[index] = parseInt(radio.value);
            checkAnswersFilled();  // Check if all answers are filled
        });

        const label = document.createElement('span');
        label.textContent = answer;

        option.appendChild(radio);
        option.appendChild(label);
        answerList.appendChild(option);
    });

    quizItem.appendChild(answerList);
    quiz.appendChild(quizItem);
});

// Create and add the finish button
const finishButton = document.createElement('button');
finishButton.textContent = 'Terminer le quiz';
finishButton.style.marginTop = '20px';
finishButton.disabled = true; // Disable the button initially

finishButton.addEventListener('click', () => {
    // Check if all questions have been answered
    const allAnswered = selectedAnswers.every(answer => answer !== null);

    if (allAnswered) {
        // Calculate the score
        correctAnswers = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === questions[index].correct) {
                correctAnswers++;
            }
        });
        
        // Change score color based on performance
        if (correctAnswers <= 5) {
            scoreMessage.style.color = 'red';  // Display in red if score <= 5
        } else {
            scoreMessage.style.color = 'green';    // Display in green if score > 5
        }

        // Show the score message
        if (scoreMessage) {
            scoreMessage.style.visibility = 'visible';
            scoreMessage.textContent = `Votre score est : ${correctAnswers} / ${questions.length}`;
        }

        // Scroll to the top of the page to show the score
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top

    } else {
        // Show reminder to fill all questions
        if (scoreMessage) {
            scoreMessage.style.visibility = 'visible';
            scoreMessage.textContent = 'Veuillez remplir toutes les questions avant de terminer.';
        }
    }

    // Apply blur effect on quiz items
    const quizItems = document.querySelectorAll('.quiz-item');
    quizItems.forEach(item => {
        item.style.filter = 'blur(8px)';
    });

    // Disable the finish button after quiz completion
    finishButton.disabled = true;
});

// Check if all answers are filled and enable the finish button
const checkAnswersFilled = () => {
    const allAnswered = selectedAnswers.every(answer => answer !== null); // If any answer is null, disable the button
    finishButton.disabled = !allAnswered; // Enable the finish button only if all answers are selected
};

// Append the finish button to the quiz container
quiz.appendChild(finishButton);
