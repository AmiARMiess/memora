const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* mobile menu */
$('#menuBtn').addEventListener('click', () => $('.nav').classList.toggle('open'));
$$('.nav-links a').forEach(a => a.addEventListener('click', () => $('.nav').classList.remove('open')));

/* FAQ accordion */
function setOpen(item, open){
  item.classList.toggle('open', open);
  const a = item.querySelector('.faq-a');
  a.style.maxHeight = open ? a.scrollHeight + 'px' : null;
}
$$('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    $$('.faq-item.open').forEach(i => setOpen(i, false));
    if (!wasOpen) setOpen(item, true);
  });
});
setOpen($('.faq-item.open'), true); /* first open by default */

/* billing toggle */
$('#billing').addEventListener('change', e => {
  const yearly = e.target.checked;
  $$('.num').forEach(n => { n.textContent = yearly ? n.dataset.y : n.dataset.m; });
  $$('.per').forEach(s => { s.textContent = yearly ? '/mo · billed yearly' : '/monthly'; });
});

/* scroll reveal */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold:.12 });
$$('.reveal').forEach(el => io.observe(el));