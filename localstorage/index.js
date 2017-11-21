function CheckPass() {
  return sha256.hex(pass.value) == 'dd420abd011650ea90ee58431fb575dddcb4ac5a67d11c14b80081cfb8918d25';
}
function RefList() {
  var lsi = Object.keys(localStorage);
  var bv = '';
  var lsv = localval.value;
  for (var i in lsi) {
    if (lsi[i] == lsv) {
      bv += '<option value = ' + lsi[i] + ' selected>' + lsi[i] + '</option>';
    } else {
      bv += '<option value = ' + lsi[i] + '>' + lsi[i] + '</option>';
    }
  }
  localval.innerHTML = bv;
}
function UpdDate() {
  selval.value = localval.value;
  GetV();
}
function GetV() {
  valb.value = localStorage.getItem(selval.value);
}
function SetV() {
  if (CheckPass()) {
    localStorage.setItem(selval.value, valb.value);
    RefList();
  }
}
function DelV() {
  if (CheckPass()) {
    localStorage.removeItem(selval.value);
    RefList();
    UpdDate();
  }
}
function RefListc() {
  var lsi = Object.keys(Cookies.get());
  var bv = '';
  var lsv = localvalc.value;
  for (var i in lsi) {
    if (lsi[i] == lsv) {
      bv += '<option value = ' + lsi[i] + ' selected>' + lsi[i] + '</option>';
    } else {
      bv += '<option value = ' + lsi[i] + '>' + lsi[i] + '</option>';
    }
  }
  localvalc.innerHTML = bv;
}
function UpdDatec() {
  selvalc.value = localvalc.value;
  GetC();
}
function GetC() {
  valbc.value = Cookies.get(selvalc.value)
}
function SetC() {
  if (CheckPass()) {
    Cookies.set(selvalc.value, valbc.value, { expires: 365, path: '/'});
    RefListc();
  }
}
function DelC() {
  if (ChechPass()) {
    Cookies.remove(selvalc.value);
    RefListc();
    UpdDatec();
  }
}
RefList();
UpdDate();
RefListc();
UpdDatec();
