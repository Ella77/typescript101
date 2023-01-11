type Add = {
    (a: number, b: number): number;
    }
    // type Add = (a: number, b: number) => number;
    
    const add: Add = (a, b) => a + b

    //const add: Add = (a, b) => {a + b}
    //throws error 



const add2: Add = (a, b) => {
    if (typeof b === "string") return a;
    return a + b;
    }

type Config = {
    path: string,
    state: number
    }
    
type Push = {
(config: Config): void,
(config: string): void
}

const push: Push = (config) => {
if (typeof config === "string") console.log(config);
else console.log(config.path);
}

type Add3={
    (a:number,b:number):number;
    (a:number,b:number,c:number):number;
    }
    
const add3 : Add= (a,b,c?:number)=>{
    return a+b;
    }

   //Will call signature be compiled into javascript ? 
// No, call signatures will not be present in the generated JavaScript code after the TypeScript code is compiled. The TypeScript compiler will remove the type annotations used in the call signatures and any other TypeScript-specific features that are not supported by JavaScript. 
//The generated JavaScript code will not have any indication of the call signatures, however the type-checking will be done during the compilation process.