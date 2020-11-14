export default () => {
	["Guild", "Message", "User"].forEach(S =>
		require(`../structures/extended/${S}`).default(),
	);
};
