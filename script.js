// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Modal
const modal = document.getElementById('modal');
const modalPhoto = document.getElementById('modalPhoto');
const modalMessage = document.getElementById('modalMessage');
const modalName = document.getElementById('modalName');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.querySelector('.modal__backdrop');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const photo = card.querySelector('.card__photo');
    const message = card.querySelector('.card__message');
    const name = card.querySelector('.card__name');

    modalPhoto.src = photo.src;
    modalPhoto.alt = photo.alt;
    modalMessage.innerHTML = message.innerHTML;
    modalName.textContent = name.textContent;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
