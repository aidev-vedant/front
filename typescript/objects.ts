


let ty:{age:number,college:string, detail:string}={
    age:25,
    college:"oxford",
    detail:"the years"
    };
    
    console.log(ty);





// assign the value to the objects of same data typeif user assing the different value then default data type it 
// will show the error 

const college={

    type:"mercedez",
    fname:"rolce royezz"
    };
    
    college.type="hello cse";
    
    console.log(college);a









// in this case the error will be occur if the user assing the different value


const college={

    type:"mercedez",
    fname:"rolce royezz"
    };
    
    college.type=2555;
    
    console.log(college);




    // example of the objects with the optional prperty 

    // optional property is a property which is assign after the object not assign in a current objects.





    let tata:{age:number,school:string,year?:number}={age:25,school:"crystalone"};

tata.year=2555;

console.log(tata);