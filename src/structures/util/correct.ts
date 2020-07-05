import { levenstein } from "./levenstein";
export const correct = (find: string, group: string[]) => {
    let array: number[] = []
    for (const str of group) {
        array.push(levenstein(str, find))
    }
    return array.sort((a, b) => a - b)
}