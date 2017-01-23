var n_select = 0 ;



// for switch a square
 function change(){
   s1.element.style.background = s2.color;
   s2.element.style.background = s1.color;
 }



function select(element){
  row = parseInt(element.classList[1])
  col = parseInt(element.classList[2])
  color = element.style.background
  if (n_select == 0){
    s1 = new Select(row , col, color, element);
    n_select = 1;
  }else {
    s2 = new Select(row , col, color, element);
    n_select = 0;
    proces();
  }
}

function esplosion(){
  destination1 = s2
  destination1.color = s1.color;
  destination2 = s1
  destination2.color = s2.color;
  debugger;
}

function proces(){
  if ((((s1.col == s2.col+1) || (s1.col == s2.col-1)) || ((s1.row == s2.row+1) || (s1.row == s2.row-1))) && (s1.row == s2.row) || (s1.col == s2.col)){
    change();
    setTimeout(function() {
      esplosion();
    }, 500);
  }else {
    alert("mossa non consentita");
  }
}


class Select{
  constructor(row, col, color, element) {
  this.row = row;
  this.col = col;
  this.color = color;
  this.element = element;
  }
}
