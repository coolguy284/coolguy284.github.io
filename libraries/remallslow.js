function c284lib_remallslow() {
  Array.from(document.getElementsByTagName('*')).forEach(x => {
    if (x.children.length == 0 && Math.random() < 0.01) x.parentNode.removeChild(x);
  });
}
c284lib_remallslowint = setInterval(c284lib_remallslow, 10);
