const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8]

// Tuple 
const contact: [string, number] = ['Vladilen', 123456]

//Any
let variable: any = 42
variable = 'New Sting'

//Func
function sayMyName(name:string): void {
    console.log(name);
}
sayMyName ('Салам')

// Never

function throwError(message:string):never {
            throw new Error(message)
        }; 
// Type
type Login = string

const login: Login = 'admin'
//const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined
