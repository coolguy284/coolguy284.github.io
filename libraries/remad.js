// bookmarklet:
// javascript:(function(){if(window.c284lib_remad)c284lib_remad();else document.body.appendChild(document.createElement('script')).src='https://coolguy284.github.io/libraries/remad.js';})();
// javascript:function c284lib_remad() { var words = ['ads', 'adclick', 'SiteAd', '2mdn']; var elems = ['div', 'iframe', 'img']; elems.forEach(tag => { Array.from(document.getElementsByTagName(tag)).forEach(elem => { var remove = false; words.forEach(word => { if (elem.id && elem.id.includes(word)) remove = true; if (elem.src && elem.src.includes(word)) remove = true; }); if (tag == 'iframe') { if (elem.onload && elem.onload.toString().includes('location.replace')) remove = true; } if (remove) elem.remove(); }); }); } c284lib_remad();
function c284lib_remad() {
  var words = ['ads', 'adclick', 'SiteAd', '2mdn'];
  var elems = ['div', 'iframe', 'img'];
  elems.forEach(tag => {
    Array.from(document.getElementsByTagName(tag)).forEach(elem => {
      var remove = false;
      words.forEach(word => {
        if (elem.id && elem.id.includes(word)) remove = true;
        if (elem.src && elem.src.includes(word)) remove = true;
      });
      if (tag == 'iframe') {
        if (elem.onload && elem.onload.toString().includes('location.replace')) remove = true;
      }
      if (remove) elem.remove();
    });
  });
}
c284lib_remad();
//c284lib_remadint = setInterval(c284lib_remad, 100);
