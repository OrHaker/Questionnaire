const Select = function ({ onChange, options }) {
	return (
		<select className="Select" onChange={onChange} data-testid="select">
			{options.map((option, idx) => (
				<option key={idx}>{option}</option>
			))}
		</select>
	);
};

export default Select;
