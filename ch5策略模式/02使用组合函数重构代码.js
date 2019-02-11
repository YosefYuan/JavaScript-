var perfomanceS = function(salary){
  return salary * 4;
};

var perfomanceA = function(salary){
  return salary * 3;
};

var perfomanceB = function(salary){
  return salary * 2;
};

var calculateBonus = function(performanceLevel, salary){
  if(performanceLevel === 'S'){
    return perfomanceS(salary);
  }

  if(performanceLevel === 'A'){
    return perfomanceA(salary);
  }


  if(performanceLevel === 'B'){
    return perfomanceB(salary);
  }
};

calculateBonus('A', 10000);