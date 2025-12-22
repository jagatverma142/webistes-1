// Automatically update the year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Simple Newsletter Animation
const subscribeForm = document.getElementById('footer-subscribe');
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = subscribeForm.querySelector('button');
    const input = subscribeForm.querySelector('input');
    
    btn.textContent = 'Thanks!';
    btn.style.background = '#fff';
    btn.style.color = '#2ecc71';
    input.value = '';
    
    setTimeout(() => {
        btn.textContent = 'Join';
        btn.style.background = '#2ecc71';
        btn.style.color = 'black';
    }, 3000);
});