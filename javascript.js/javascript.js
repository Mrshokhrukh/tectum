let asil_downArrow = document.getElementById('asil_downArrow');
let asil_deleteasil_downArrow = document.getElementById('asil_deleteasil_downArrow');
let text = document.getElementById('text');

 asil_downArrow.addEventListener('click', () => {
     text.textContent = 'Нет.Обговоренная сумма не изменится до завершения сделки';
     asil_downArrow.style.display = 'none';
     asil_deleteasil_downArrow.style.display = 'inline-block';
 });

 asil_deleteasil_downArrow.addEventListener('click', () => {
     text.textContent = '';
     asil_downArrow.style.display = 'inline-block';
     asil_deleteasil_downArrow.style.display = 'none';
 });