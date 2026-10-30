import './style.css';
import { inject } from '@vercel/analytics';
inject();


// Hamburger dropdown toggle
const mobileBtn = document.getElementById('mobile-btn');
const mobileDropdown = document.getElementById('mobile-dropdown');

if (mobileBtn && mobileDropdown) {
  mobileBtn.addEventListener('click', () => {
    mobileDropdown.classList.toggle('hidden');
  });
}