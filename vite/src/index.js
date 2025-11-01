import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { DateTime } from 'luxon';

document.addEventListener('DOMContentLoaded', function () {
  const showTimeBtn = document.getElementById('showTimeBtn');
  const modalBody = document.getElementById('modalBody');
  const timeModal = new bootstrap.Modal(document.getElementById('timeModal'));

  showTimeBtn.addEventListener('click', function () {
    const now = DateTime.now();

    const formattedDateTime = now.setLocale('ru').toFormat('dd MMMM yyyy, HH:mm:ss');

    modalBody.innerHTML = `<p class="text-center fs-4">${formattedDateTime}</p>`;

    timeModal.show();
  });
});