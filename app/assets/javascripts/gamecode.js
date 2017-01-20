var n_select = 0 ;

// for switch a square
 function change(){
   s1.element.style.background = s2.color;
   s1.element.id = s2.color;
   s2.element.style.background = s1.color;
   s2.element.id = s1.color;
 }



function select(row , col, element){
  console.log(n_select)
  if (n_select == 0){
    s1 = new Select(row , col, element.id, element);
    n_select = 1;
  }else {
    s2 = new Select(row , col, element.id, element);
    n_select = 0;
    proces();
  }
}

function proces(){
  if ((((s1.col == s2.col+1) || (s1.col == s2.col-1)) || ((s1.row == s2.row+1) || (s1.row == s2.row-1))) && (s1.row == s2.row) || (s1.col == s2.col)){
    change();
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
