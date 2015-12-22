function factorialize(num) {
 var counter = num--;
 var total = 1;
 var bum = 1;
    while(counter > 1){
      bum = num * counter; //5*4 
      total *= bum;
      counter = counter-2;
      num = num-2;
    }
  return total;
}

factorialize(5);
