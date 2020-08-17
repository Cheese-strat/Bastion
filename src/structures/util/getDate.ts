export default (str:string):number => {
    str.toLowerCase()
    for (let x =0;x<Object.keys(obj).length;x++){
        str.replace(Object.keys(obj)[x], obj[Object.keys(obj)[x]]) 
    }
    const matches = str.match(/[0-9]+ {0,}[smhd]/gi)
    console.log(matches)
    return matches
}
