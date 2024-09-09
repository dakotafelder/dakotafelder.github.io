// Mocked AI Kaomoji Generation
const generateButton = document.getElementById('generateKaomoji');
const promptInput = document.getElementById('kaomojiPrompt');
const generatedKaomojiElement = document.getElementById('generatedKaomoji');
const aiButtonIcon = document.getElementById('aiButtonIcon');

promptInput.addEventListener('input', handleInputChange);
generateButton.addEventListener('click', generateKaomoji);

function handleInputChange() {
    if (promptInput.value.trim() !== '') {
        generateButton.style.backgroundColor = '#4285f4';
        aiButtonIcon.style.filter = 'brightness(0) invert(1)';
    } else {
        generateButton.style.backgroundColor = '#F9F9F9';
        aiButtonIcon.style.filter = 'none';
    }
}

async function generateKaomoji() {
    const prompt = promptInput.value.trim();
    if (!prompt) {
        return;
    }

    generateButton.disabled = true;
    aiButtonIcon.style.display = 'none';
    document.getElementById('spinner').style.display = 'block';
    
    try {
        const response = await fetch('https://kaomoji-backend.vercel.app/api/generate-kaomoji.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        displayGeneratedKaomoji(data.kaomoji);
        document.querySelector('.input-container').style.display = 'none';
    } catch (error) {
        console.error('Error generating kaomoji:', error);
        // Optionally, display an error message to the user
    } finally {
        generateButton.disabled = false;
        aiButtonIcon.style.display = 'block';
        document.getElementById('spinner').style.display = 'none';
    }
}

function displayGeneratedKaomoji(kaomoji) {
    generatedKaomojiElement.innerHTML = ''; // Clear previous content
    
    // Create a wrapper for the kaomoji
    const wrapper = document.createElement('span');
    wrapper.textContent = kaomoji;
    wrapper.style.opacity = '0';
    wrapper.style.position = 'relative';
    generatedKaomojiElement.appendChild(wrapper);

    // Create sparkles
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('span');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.fontSize = '24px';
        sparkle.style.opacity = '0';
        sparkle.style.transition = 'all 0.5s ease-out';
        wrapper.appendChild(sparkle);
    }

    // Animate
    setTimeout(() => {
        wrapper.style.transition = 'opacity 0.5s';
        wrapper.style.opacity = '1';

        wrapper.querySelectorAll('span').forEach((sparkle, index) => {
            setTimeout(() => {
                sparkle.style.opacity = '1';
                sparkle.style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px)`;
            }, index * 100);

            setTimeout(() => {
                sparkle.style.opacity = '0';
            }, 500 + index * 100);
        });
    }, 100);
}

// Remove the showError function as it's no longer needed