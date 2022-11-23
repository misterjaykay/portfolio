window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  
  
    for (let i = 0; i < 200; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("snow");
        const appendLocation = document.getElementById('snow-section');
  
        appendLocation.appendChild(newDiv);
        
    }
  
  });