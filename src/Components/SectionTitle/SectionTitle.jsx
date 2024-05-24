

const SectionTitle = ({heading,subHeading}) => {
	return (
		<div className="mx-auto text-center md:w-4/12 pb-5">
			<p className="text-green-600 mb-2">---{heading}---</p>
			<h3 className="text-2xl uppercase border-y-4 py-4">{subHeading} </h3>
		</div>
	);
};

export default SectionTitle;