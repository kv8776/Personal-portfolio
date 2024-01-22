
const dynamicText = document.querySelector(".typing-text");
    const words = ["Web development", "Coding", "Games","Web design"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
    
      if (!isDeleting) {
        charIndex++;
    
        if (charIndex > currentWord.length) {
          isDeleting = true;
          setTimeout(() => {
            wordIndex++;
            isDeleting = false;
          }, 000); // Delay before switching to the next word
        }
      } else {
        charIndex--;
    
        if (charIndex === 0) {
          wordIndex = (wordIndex + 1) % words.length; // Loop through the words array
        }
      }
    
      setTimeout(typeEffect, 150); // Delay between typing/deleting characters
    };
    
    // Initial call to start the typing animation
    typeEffect();
