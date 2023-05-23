enum year{

    jan=2001,feb=2002,march=2003
};
//here we get the value 2001 on the console.
let yrt=year.jan;

console.log(yrt);

// in the enum if the user call the different value in the enum then user will get the error that value is not exist.

// in the enum


// enum month{

//     jan,feb,march,april,may,june,july
// };
// let mth=month.jan;
// console.log(mth);







enum month{

    jan,feb,march,april=1000,may,june,july
};
let mth=month.april;
let tm=month.feb;
console.log(mth);
console.log(tm);




//fully numeric enum



enum toggle{

    abc=100,
    bike=500,
    car=7000,
    bus=10000
    };
    
    let motor=toggle.abc;
    console.log(motor);




// enu with function 

    enum cars{

        bmw=10,mercedez=20,ferrari=23
        
        }
        
        function days(abc:cars)
        {
        return abc;
        }
        
        console.warn(days(cars.bmw);
        
        
        

        //string enum


        enum abc{

            name="vedant",college="oxford",cgpa="ten"
            }
            
            console.log(abc.name);