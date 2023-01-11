//https://www.typescriptlang.org/docs/handbook/enums.html



function playerMaker1(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})


function noop() {
    return;
    }
function fail(msg: string): never {
        throw new Error(msg);
        }


function temp(name:string|number):never {
            if(typeof name === "string"){
                name
            } else if(typeof name === "number"){
                name
            } else {
                name
            }
        }
        //because the function "temp" doesn't have any path of execution that returns a value of type "never".
        //warning It's only when you explicitly set the return type of a function to "never" and the function doesn't contain any unreachable code or statements that guarantee that the function will never return
type Player = {
            readonly name:string
            age?:number
}
//alias

        
    


type PizzaFunction = {
            pizza: string;
            (args: number): boolean;
            };
            
function hello(fn: PizzaFunction) {
            console.log(fn.pizza, fn(6));
            }
        


