document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');
  const charCount = document.getElementById('char-count');
  const validationMsg = document.getElementById('validation-message');
  const feedbackDisplay = document.getElementById('feedback-display');

  
  commentsInput.addEventListener('input', () => {
    charCount.textContent = `${commentsInput.value.length} characters`;
  });

  
  form.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      const tooltip = e.target.nextElementSibling;
      if (tooltip && tooltip.classList.contains('tooltip')) {
        tooltip.style.display = 'block';
      }
    }
  });

  form.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      const tooltip = e.target.nextElementSibling;
      if (tooltip && tooltip.classList.contains('tooltip')) {
        tooltip.style.display = 'none';
      }
    }
  });

  
  form.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    if (!name || !email || !comments) {
      validationMsg.textContent = 'Please fill in all fields.';
      return;
    }

    validationMsg.textContent = ''; 

    
    const entry = document.createElement('div');
    entry.innerHTML = `
      <p><strong>${name}</strong> (${email}) said:</p>
      <p>${comments}</p>
      <hr>
    `;
    feedbackDisplay.appendChild(entry);

    
    form.reset();
    charCount.textContent = '0 characters';
  });

  
  document.body.addEventListener('click', () => {
    console.log('Background clicked (outside form)');
  });
});
