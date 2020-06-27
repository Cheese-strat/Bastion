import Levenstein from "./levenstein";
export default (find:string, group:string[])=>{
    let array:number[] = []
    for (const str of group){
        array.push(Levenstein(str, find))
    }
    return array.sort((a, b)=>a-b)
}