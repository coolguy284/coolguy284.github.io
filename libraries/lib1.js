function DeleteAll() {
  vars = Object.keys()
  for (var i in vars) {
    eval('delete ' + vars[i]);
   }
}
