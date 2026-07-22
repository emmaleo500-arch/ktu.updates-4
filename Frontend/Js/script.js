
document.addEventListener('DOMContentLoaded', function() {
  console.log('Kiu.Vibes frontend ready');

  // Bookmark toggle
  document.querySelectorAll('.bookmark-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.stopPropagation();
      const i = this.querySelector('i');
      if (i.classList.contains('far')) {
        i.classList.remove('far');
        i.classList.add('fas');
        i.style.color = '#6c5ce7';
      } else {
        i.classList.remove('fas');
        i.classList.add('far');
        i.style.color = '';
      }
    });
  });

  // Notification bell
  const bell = document.querySelector('.user-actions .fa-bell');
  if (bell) {
    bell.addEventListener('click', () => alert('You have 3 unread notifications.'));
  }

  // Search
  const search = document.querySelector('.user-actions .fa-search');
  if (search) {
    search.addEventListener('click', () => alert(' Search feature '));
  }

  // Auth buttons (Login/Register)
  document.querySelectorAll('.auth-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const text = this.innerText.trim();
      alert(` ${text} ( action)`);
    });
  });

  // Admin manage
  const adminManage = document.querySelector('.admin-dash-preview + div');
  if (adminManage) {
    adminManage.addEventListener('click', () => alert(' Admin dashboard '));
  }
});