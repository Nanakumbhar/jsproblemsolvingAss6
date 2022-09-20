// Q .1.Find the Smaller Angle

var Minimal_Angle = (h, m) => 
{
    h  = h % 12 ;
    hh = (h * 360) / 12 + (m * 360) / (12 * 60);
    mm = (m * 360) / (60);
    var angle = Math.abs (hh - mm) ;
    if (angle > 180 ) {
      angle = 360 - angle;
    }
    return angle
};

// Q .2.Check whether the year is Leap year or not.

var Check_Leap = (year) => 
{
 
  if((year % 4 === 0) && (year % 100 !== 0))
    return "Leap Year"
  else
    return "Non Leap Year"

};

// Q .3.Perfect Number Check.

var Perfect_Check = (N) => 
{
  let sum = 0;
  if(N == 1)
    console.log("YES");
    
  for(let i =0; i<N/2;i++)
    if(N%i == 0)
      sum += i;
  
  if(sum == N)
    return "YES";
  else
    return "NO";
        
};

// Q .4.Reverse a Number.

var Reverse_Number = (N) => 
{
  N = N + "";
	let num = N.split("").reverse().join("");
  return parseFloat(num);
};

// Q .5.Substring Check.

var Substring_Check = (S1, S2) => 
{
  let str = S1.split(" ");
  let count = 0;
  for(let i=0 ;i<str.length;i++)
    if(str[i] === S2)
      count++;
  
  if(count > 0)
    return "YES"
  else
    return "NO"
};



