function c284lib_remad() {
  document.getElementsByTagName('iframe').forEach(x => { if(x.id.includes('ads')) x.remove(); })
}
c284lib_remad();
