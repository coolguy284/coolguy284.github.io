// bookmarklet:
// javascript:(function(){if(window.c284lib_remad)c284lib_remad();else document.body.appendChild(document.createElement('script')).src='https://coolguy284.github.io/libraries/remad.js';})();
function c284lib_remad() {
  Array.from(document.getElementsByTagName('iframe')).forEach(x => { if(x.id.includes('ads')) x.remove(); });
  Array.from(document.getElementsByTagName('div')).forEach(x => { if (x.id.includes('SiteAd')) x.remove(); });
}
c284lib_remad();
