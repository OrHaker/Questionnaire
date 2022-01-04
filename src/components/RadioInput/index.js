import PropTypes from 'prop-types';
import './style.scss';

const Radio = ({ onChange, radiosData }) => {
	if (radiosData)
		return (
			<div className="Radio">
				{radiosData.map(({ value, title, label }, idx) => (
					<span key={idx}>
						<label htmlFor={value + title} data-testid="yes"> {label} </label>
						<input id={value + title} type="radio" name={title} value={value} onChange={onChange} />
					</span>
				))}
			</div>
		);
	return null;
};

Radio.propTypes = {
	onChange: PropTypes.func.isRequired,
	yesNo: PropTypes.bool,
	radiosData: PropTypes.array.isRequired,
};
export default Radio;
