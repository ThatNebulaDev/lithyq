document.addEventListener("DOMContentLoaded", function() {
    // Chapter bar toggle functionality
    const chapterBars = document.querySelectorAll('.chapter-bar');
    chapterBars.forEach(bar => {
        const chapterTitle = bar.querySelector('.chapter-title');
        chapterTitle.addEventListener('click', function() {
            if (bar.classList.contains('open')) {
                bar.classList.remove('open');
            } else {
                chapterBars.forEach(b => b.classList.remove('open'));
                bar.classList.add('open');
            }
        });
    });
});

// Evaluate the choice immediately
function evaluateChoice(choiceElement, userAnswer, correctAnswer) {
    const choicesContainer = choiceElement.closest('.choices');
    const choices = choicesContainer.querySelectorAll('.choice');

    // Reset all choices' borders
    choices.forEach(choice => {
        choice.classList.remove('correct', 'incorrect');
    });

    // Add correct/incorrect class
    if (userAnswer === correctAnswer) {
        choiceElement.classList.add('correct');
    } else {
        choiceElement.classList.add('incorrect');
        // Highlight the correct answer
        choices.forEach(choice => {
            const input = choice.querySelector('input');
            if (input && input.value === correctAnswer) {
                choice.classList.add('correct');
            }
        });
    }
}
