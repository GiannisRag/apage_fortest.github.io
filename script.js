function btnClick() {
  document.getElementById('par2').style.display='block';
  var x = document.getElementById("mytable1").getElementsByTagName("td");
  var numOfCells = x.length;
  console.log("The mhkos toy pinaka einai:", numOfCells);
  for (var i = 0; i < numOfCells; i++) {
    //console.log(i);
    rr = Math.floor(Math.random() * 256);
    rr1 = rr;
    rr2 = rr1.toString();
    gg = Math.floor(Math.random() * 256);
    gg1 = gg;
    gg2 = gg1.toString();
    bb = Math.floor(Math.random() * 256);
    bb1 = bb;
    bb2 = bb1.toString();
    // Μετέτρεψε σε 0-100 integer
    rr1 =(rr1/256)*100;rr1=rr1.toFixed(0); 
    gg1 =(gg1/256)*100;gg1=gg1.toFixed(0); 
    bb1 =(bb1/256)*100;bb1=bb1.toFixed(0); 
    console.log(rr1, gg1, bb1);
    x[i].innerHTML = rr1 + "-" + gg1 + "-" + bb1;
    x[i].style.backgroundColor = "RGBA(" + rr2 + "," + gg2 + "," + bb2 + ",0.99)";
  }
}
//    }
//}

/*
function aaaa1() {
  var rr = 0;
  var gg = 0;
  var bb = 0;
  var rr1 = 0;
  var gg1 = 0;
  var bb1 = 0;
  var rr2 = "";
  var gg2 = "";
  var bb2 = "";
  var t = document.getElementById("sales-info");
  if (t) {
    Array.from(t.rows).forEach((tr, rowIdx) => {
      Array.from(tr.cells).forEach((cell, cellIdx) => {
        rr = Math.floor(Math.random() * 256);
        rr1 = rr;
        rr2 = rr1.toString();
        gg = Math.floor(Math.random() * 256);
        gg1 = gg;
        gg2 = gg1.toString();
        bb = Math.floor(Math.random() * 256);
        bb1 = bb;
        bb2 = bb1.toString();
        console.log(rr2, gg2, bb2);
        cell.style.backgroundColor =
          "RGBA(" + rr2 + "," + gg2 + "," + bb2 + ",0.8)";
        //cell.style.backgroundColor = 'RGBA('+'200'+',83,108,0.4)';  //works
      });
    });
  }
}
/*var table = document.getElementById("sales-info");
		for (var i = 0, row; row = table.rows[i]; i++) {
			for (var j = 0, cell; cell = row.cells[j]; j++) {
				if (cell.innerText == '') {
					cell.style.backgroundColor = 'RGBA(255,83,108,0.4)';
				}else if (cell.innerText >=0 && cell.innerText <=15) {
					cell.style.backgroundColor = 'RGBA(0,198,191,0.4)';
				}else if (cell.innerText > 15 && cell.innerText <=20) {
					cell.style.backgroundColor = 'RGBA(170,214,136,0.4)';
				}else if (cell.innerText > 20 && cell.innerText <=25) {
					cell.style.backgroundColor = 'RGBA(152,195,119,0.6)';
				}else if (cell.innerText > 25 && cell.innerText <=30) {
					cell.style.backgroundColor = 'RGBA(139,189,120,0.9)';
				}else if (cell.innerText > 30 && cell.innerText <=60) {
					cell.style.backgroundColor = 'RGBA(255,167,88,0.9)';
				}else if (cell.innerText > 60 && cell.innerText <=150) {
					cell.style.backgroundColor = 'RGBA(88,157,65,0.3)';
				}else if (cell.innerText > 150 && cell.innerText <=10000) {
					cell.style.backgroundColor = 'RGBA(95,160,97,0.6)';
				}else if (cell.innerText > 10000 && cell.innerText <=20000) {
					cell.style.backgroundColor = 'RGBA(105,170,90,0.7)';
				}else if (cell.innerText > 20000 && cell.innerText <=30000) {
					cell.style.backgroundColor = 'RGBA(115,164,76,0.6)';
				}else if (cell.innerText > 30000) {
					cell.style.backgroundColor = 'RGBA(98,143,94,0.4)';
				}
			}  
		}*/