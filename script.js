const positiveThoughts = [
    "You are enough, just as you are. 💖",
   "Your strength is your superpower. 🦸‍♀️",
   "You are the author of your story. 📝",
   "Celebrate every little victory—you deserve it. 🏆",
   "You’re a masterpiece in progress. 🎨",
   "Your heart is as beautiful as your soul. 🌷",
   "You deserve the love you give to others. ❤️",
   "Your kindness makes the world brighter. 🌍✨",
   "You’re brave, bold, and beautiful. 💎",
   "Every step you take is a step toward greatness. 🚶‍♀️🌟",
   "You are the light in someone’s darkness. 🕯️",
   "You bring magic wherever you go. 🪄",
   "There’s nothing you can’t achieve with that amazing mind of yours. 🧠💡",
   "You’re growing stronger every single day. 🌱",
   "You are loved beyond measure. 💕",
   "Your uniqueness is your power. 🌟",
   "Be your own biggest fan—cheer for yourself! 🎉",
   "Your dreams are worth chasing, and you’re worth every effort. 🌈",
   "You are a gift to this world. 🎁",
   "Take a moment to appreciate how amazing you are. 🌸",
   ];
   
   function createSparkles(x, y) {
     for (let i = 0; i < 8; i++) {
       const sparkle = document.createElement('div');
       sparkle.className = 'sparkle';
       
       const angle = (i / 8) * 360;
       const distance = 50;
       
       sparkle.style.left = `${x}px`;
       sparkle.style.top = `${y}px`;
       sparkle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(${distance}px)`;
       
       document.body.appendChild(sparkle);
       
       // Remove sparkle after animation
       setTimeout(() => sparkle.remove(), 800);
     }
   }
   
   function createThought(x, y) {
     const thought = document.createElement('div');
     thought.className = 'thought';
     
     // Random positive thought
     const randomThought = positiveThoughts[Math.floor(Math.random() * positiveThoughts.length)];
     thought.textContent = randomThought;
     
     // Random movement direction
     const moveX = (Math.random() - 0.5) * 200;
     const moveY = -150 - Math.random() * 100; // Always move upward
     const rotation = (Math.random() - 0.5) * 30;
     
     thought.style.setProperty('--moveX', `${moveX}px`);
     thought.style.setProperty('--moveY', `${moveY}px`);
     thought.style.setProperty('--rotation', `${rotation}deg`);
     
     // Position at click
     thought.style.left = `${x}px`;
     thought.style.top = `${y}px`;
     thought.style.transform = 'translate(-50%, -50%)';
     
     document.body.appendChild(thought);
     
     // Create sparkle effect
     createSparkles(x, y);
     
     // Remove thought after animation
     setTimeout(() => thought.remove(), 2000);
   }
   
   document.addEventListener('click', (e) => {
     createThought(e.clientX, e.clientY);
   });