export default (str: string): null | string[] => {
	const matches = str.toLowerCase().match(/[0-9]+ {0,}[smhd]/g);
	return matches ? Array.from(matches) : null;
};
