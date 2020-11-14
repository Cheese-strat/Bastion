import { correctThreshold as thresh } from "../../../config.json";
import { levenstein } from "./levenstein";
export function correct({
	find,
	group,
	threshold = thresh,
}: {
	find: string;
	group: string[];
	threshold?: number;
}) {
	const [res] = group.sort((a, b) => {
		return levenstein(find, a) - levenstein(find, b);
	});
	return threshold > levenstein(find, res) ? null : res;
}
