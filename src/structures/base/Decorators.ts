/**
 * Comment
 *
 * @returns {ClassDecorator}
 */
export function executionLog(): ClassDecorator {
	return function <TFunction extends Function>(target: TFunction): TFunction {
		console.log(`Executing command: ${target.name}`);
		return target;
	};
}
