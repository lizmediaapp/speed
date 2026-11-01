(function () {
  'use strict';

  if (document.getElementById('lizspeed-back-to-top')) return;

  var style = document.createElement('style');
  style.textContent = [
    '#lizspeed-back-to-top{position:fixed;right:max(1rem,env(safe-area-inset-right));bottom:max(1rem,env(safe-area-inset-bottom));z-index:30;width:48px;height:48px;display:grid;place-items:center;padding:0;border:1px solid rgba(255,255,255,.7);border-radius:9999px;background:#f47c20;color:#fff;box-shadow:0 12px 28px -14px rgba(106,74,47,.7);cursor:pointer;opacity:0;visibility:hidden;pointer-events:none;transform:translateY(12px);transition:opacity .2s ease,visibility .2s ease,transform .2s ease}',
    '#lizspeed-back-to-top svg{display:block;width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.25;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}',
    '#lizspeed-back-to-top.is-visible{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}',
    '#lizspeed-back-to-top:hover{background:#df6813;transform:translateY(-2px)}',
    '#lizspeed-back-to-top:focus-visible{outline:3px solid rgba(244,124,32,.35);outline-offset:3px}',
    '@media(max-width:640px){#lizspeed-back-to-top{width:46px;height:46px}}',
    '@media(prefers-reduced-motion:reduce){#lizspeed-back-to-top{transition:none}#lizspeed-back-to-top:hover{transform:none}}'
  ].join('');
  document.head.appendChild(style);

  var button = document.createElement('button');
  button.id = 'lizspeed-back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.title = 'Back to top';
  button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 4h14M12 20V9m-5 5 5-5 5 5"/></svg>';
  document.body.appendChild(button);

  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var update = function () {
    button.classList.toggle('is-visible', window.scrollY > 480);
  };

  button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
