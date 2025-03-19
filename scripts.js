// إضافة تأثيرات متقدمة
document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'scale(1.1)';
  });
  ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'scale(1)';
  });
});
