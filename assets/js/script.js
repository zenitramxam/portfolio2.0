

function darkmode() {
  var el= document.body
  var head= document.getElementById("oneH");
  var about= document.getElementById("am");
  var work= document.getElementById("wk");
  var cont=  document.getElementById("cm");
  var parg=  document.getElementById("paraBorder");
  var flex=  document.getElementById("flexBorder");
  var foot=  document.getElementById("footBorder");


  el.classList.toggle("dark");
  about.classList.toggle("ad");
  head.classList.toggle("ad");
  work.classList.toggle("ad");
  cont.classList.toggle("ad");
  parg.classList.toggle("newborder");
  flex.classList.toggle("newborder");
  foot.classList.toggle("newborder");
};
