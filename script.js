document.getElementById('skills-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const skillInput = document.getElementById('skill-input');
    const skillValue = skillInput.value.trim();

    if (skillValue) {
        const skillItem = document.createElement('li');
        skillItem.classList.add('skill');
        skillItem.textContent = skillValue;
        
        const removeButton = document.createElement('span');
        removeButton.textContent = 'x';
        removeButton.classList.add('remove-skill');
        
        removeButton.addEventListener('click', function() {
            skillItem.remove(); 
        });

        skillItem.appendChild(removeButton);
        document.getElementById('skills-list').appendChild(skillItem);
        skillInput.value = '';
    }
});


