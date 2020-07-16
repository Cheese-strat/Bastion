import { levenstein } from "./levenstein";
export function correct(find: string, group: string[], threshold?: number = thresh) {
    const res = group.sort((a, b) => {
        return levenstein(find, a) - levenstein(find, b);
    })[0];
    return threshold ? res : null
}