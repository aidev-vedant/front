// partial this utility changes all the propertise of the interface means it convert it into object and provide 
// facility to apply all the value as optional not compulsory




interface basic{

    a:number;
    b:string;
    }
    
    
    let pick: Partial<basic>={};
    pick.a=355;
    
    console.log(pick);
    




    interface basic {
        x: number;
        y: number;
      }
                  
      let pointPart: Partial<basic> = {}; // `Partial` allows x and y to be optional
      pointPart.x = 10;
      
      console.log(pointPart);
      
      
      //required utility





interface one{

    a:string;
    b:number;
    average?:number;
    }
    
    let tahl:Required<one>={
    
    a:'hello world',
    b:10,
    average:75
    };
    
    console.log(tahl);
      
      
      

    //record utility




const age:Record<string,number>={
    'vvv':27,
    'ttt':25
    };
    
    console.log(age);
    
    
    

    //omit utility this utility 

interface college
{

a:string;
b:number;
locate?:string;
}

const harly:Omit<college,'b' | 'locate'>={
a:'hello how are you'
};


console.log(harly);




//pick utility this utility keeps only define key in it and remove all other from objects



interface yahoo{


    abc:string;
    age:number;
    school?:string;
    }
    
    const yrt:Pick<yahoo,'abc'>={
    
    abc:'hello how are you'
    };
    
    console.log(yrt);



    // exclude removes the specified key in it

type Prim = string|number|boolean;


const vah:Exclude<Prim,string>=true;
const ht:Exclude<Prim,string>=100;


console.log(typeof vah);
console.log(typeof ht);

