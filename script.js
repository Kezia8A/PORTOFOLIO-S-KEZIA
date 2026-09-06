// 1. Dark/Light Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if(document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// 2. Filter Proyek
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// 3. Tool Cards Click Feedback
const toolCards = document.querySelectorAll('.tool-card');
toolCards.forEach(card => {
    card.addEventListener('click', () => {
        const toolName = card.getAttribute('data-tool');
        alert(`Software: ${toolName}`);
    });
});

// 4. Form Contact Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = "Pesan Anda berhasil dikirim! Terima kasih.";
    contactForm.reset();

    setTimeout(() => {
        formStatus.textContent = "";
    }, 4000);
});

// 5. Typewriter Effect
const texts = ["Photographer", "UI/UX Designer", "Digital Artist", "Traditional Artist", "Poster Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typewriter').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}
type();

// 6. Cursor Trail Effect
document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 500);
});

// 7. Mini Game Tebak Angka
const randomNumber = Math.floor(Math.random() * 10) + 1;
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const gameMessage = document.getElementById('game-message');

guessBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 10) {
        gameMessage.textContent = "Masukkan angka antara 1 sampai 10 ya!";
        gameMessage.style.color = "orange";
        return;
    }

    if (userGuess === randomNumber) {
        gameMessage.textContent = "🎉 Selamat! Tebakan kamu benar!";
        gameMessage.style.color = "green";
    } else if (userGuess < randomNumber) {
        gameMessage.textContent = "Terlalu kecil! Coba lagi.";
        gameMessage.style.color = "red";
    } else {
        gameMessage.textContent = "Terlalu besar! Coba lagi.";
        gameMessage.style.color = "red";
    }
});