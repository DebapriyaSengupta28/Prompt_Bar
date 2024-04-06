const promptTextarea = document.getElementById('promptTextarea');
const submitButton = document.getElementById('submitButton');

// Adjust the textarea height based on content
promptTextarea.addEventListener('input', () => {
  promptTextarea.style.height = 'auto';
  const newHeight = `${promptTextarea.scrollHeight}px`;
  promptTextarea.style.height = newHeight;

  // Show or hide the scrollbar based on content height
  if (promptTextarea.scrollHeight > promptTextarea.offsetHeight) {
    promptTextarea.classList.add('scrollable');
  } else {
    promptTextarea.classList.remove('scrollable');
  }
});

// Handle submit button click
submitButton.addEventListener('click', () => {
  const prompt = promptTextarea.value.trim();
  if (prompt) {
    // Process the prompt (e.g., send it to an AI system)
    console.log('Submitted prompt:', prompt);
    // Clear the textarea
    promptTextarea.value = '';
  }
});
