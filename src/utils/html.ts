export const createMarkup = (htmlString: string) => {
	return { __html: htmlString };
};

export default { createMarkup };
