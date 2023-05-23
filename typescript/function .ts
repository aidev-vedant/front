
// function with return type void
function hello():void{

    console.log('helo how are you');
    }
    
    hello();



    // function with the return type number
function getTime(): number {
    return new Date().getTime();
  }
  
  console.log(getTime());




//function parameter type

function multi(a:number,b:number)
{
return a*b;
}

console.log(multi(10,25))





// function with the optional parameter

function abc(t:number,r:number,d?:number)
{
return t+r+(d||0);

}

console.log(abc(10,20))




//default parameter



function aww(value:number,exponent:number=11)
{

return value**exponent;
}

console.log(aww(11));