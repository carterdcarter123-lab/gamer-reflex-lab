(function(){
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  function closeAll(except){
    dropdowns.forEach(d => {
      if(d === except) return;
      const toggle = d.querySelector('.nav-dropdown-toggle');
      const menu = d.querySelector('.nav-dropdown-menu');
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    });
  }

  dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.nav-dropdown-toggle');
    const menu = drop.querySelector('.nav-dropdown-menu');

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('open');
      closeAll(drop);
      if(isOpen){
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        menu.classList.add('open');
      }
    });
  });

  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeAll(); });
})();
