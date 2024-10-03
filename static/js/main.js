const socket = io();

let currentRole = null;
let selectedLanguage = 'en';

console.log('Initializing WebSocket connection...');

socket.on('connect', () => {
    console.log('WebSocket connection established successfully');
});

socket.on('connect_error', (error) => {
    console.error('WebSocket connection error:', error);
});

function selectRole(role) {
    console.log(`Selecting role: ${role}`);
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
        console.log('Sending message:', message);
        socket.emit('host_message', { text: message });
        messageInput.value = '';
        showMessageConfirmation();
    } else {
        console.log('Empty message, not sending');
    }
}

function showMessageConfirmation() {
    const confirmationElement = document.getElementById('message-confirmation');
    confirmationElement.textContent = 'Message sent successfully!';
    confirmationElement.style.display = 'block';
    setTimeout(() => {
        confirmationElement.style.display = 'none';
    }, 3000);
}

function changeLanguage() {
    selectedLanguage = document.getElementById('language-select').value;
    console.log(`Changing language to: ${selectedLanguage}`);
    socket.emit('join', { language: selectedLanguage });
}

socket.on('translation', function(data) {
    console.log('Received translation:', data);
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
        console.log('Fetched supported languages:', languages);
        const select = document.getElementById('language-select');
        for (const [code, name] of Object.entries(languages)) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = name;
            select.appendChild(option);
        }
    })
    .catch(error => {
        console.error('Error fetching languages:', error);
    });
