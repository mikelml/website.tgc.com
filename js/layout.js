async function loadComponent(id, htmlPath, scriptPath) {
  const container = document.getElementById(id);
  if (!container) return;

  const res = await fetch(htmlPath);
  const html = await res.text();
  container.innerHTML = html;

  if (scriptPath) {
    const script = document.createElement('script');
    script.src = scriptPath;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
}

(async () => {
  await loadComponent('navbar', 'components/navbar/index.html', 'components/navbar/script.js');
  await loadComponent('banner', 'components/banner/index.html', 'components/banner/script.js');
  await loadComponent('delatierraatumesa', 'components/delatierraatumesa/index.html', 'components/delatierraatumesa/script.js');
  await loadComponent('calidad', 'components/calidad/index.html', 'components/calidad/script.js');
  await loadComponent('nosotros', 'components/nosotros/index.html', 'components/nosotros/script.js');
  await loadComponent('nosotros2', 'components/nosotros2/index.html', 'components/nosotros2/script.js');
  await loadComponent('productos', 'components/productos/index.html', 'components/productos/script.js');
  await loadComponent('reviews', 'components/reviews/index.html', 'components/reviews/script.js');
  await loadComponent('contactanos', 'components/contactanos/index.html', 'components/contactanos/script.js');
})();