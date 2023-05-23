function basic<S,T>(v1:S, v2: T):[S,T]{

    return [v1,v2];
    }
    
    console.log(basic<string,number>('vedant',42));
    
    
    
    function dream<A,B>(c1:A,c2:B):[A,B]
    {
    return [c1,c2];
    
    }
    
    console.log(dream<string,string>('hello vedant','BTech Cse'));




// generics with the array

    function getItems<T>(items : T[] ) : T[] {  
        return new Array<T>().concat(items);  
    }  
    let arrNumber = getItems<number>([10, 20, 30]);  
    let arrString = getItems<string>(["Hello", "JavaTpoint"]);  
    arrNumber.push(40); // Correct  
    arrString.push("Hello TypeScript"); // Correct  
    console.log(arrNumber);  
    console.log(arrString);  