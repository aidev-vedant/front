




interface tyr{

    getArea:()=>number;
    }
    
    class circle implements tyr{
    
    public constructor(protected readonly width:number,protected readonly height:number){}
    
    
    public getArea():number{
    
    return this.width*this.height;
    }
    }
    const abc=new circle(30,50);
    
    console.log(abc.getArea());
    
    







    
    
    
    
    
    