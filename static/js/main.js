const socket = io();

let currentRole = null;
let selectedLanguage = 'en';

function selectRole(role) {
    currentRole = role;
    document.getElementById('role-selector').style.display = 'none';
    document.getElementById(`${role}-interface`).style.display = 'block';

    if (role === 'listener') {
        socket.emit('join', { language: selectedLanguage });
    }
}

function sendMessage() {
    const messageInput = document.getElementById('host-input');
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('host_message', { text: message });
        messageInput.value = '';
    }
}

function changeLanguage() {
    selectedLanguage = document.getElementById('language-select').value;
    socket.emit('join', { language: selectedLanguage });
}

socket.on('translation', function(data) {
    if (currentRole === 'listener' && data.lang === selectedLanguage) {
        const outputDiv = document.getElementById('translation-output');
        outputDiv.innerHTML += `<p>${data.text}</p>`;
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});

socket.on('user_joined', function(data) {
    console.log(`User joined with language: ${data.language}`);
});

// Fetch supported languages from the server
fetch('/api/languages')
    .then(response => response.json())
    .then(languages => {
        const select = document.getElementById('language-select');
        for (const [code, name] of Object.entries(languages)) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = name;
            select.appendChild(option);
        }
    });
