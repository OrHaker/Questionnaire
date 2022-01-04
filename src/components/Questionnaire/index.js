import Question from 'components/Question';

import './style.scss';

function Questionnaire({ questions }) {
	return (
		<div className="Questionnaire">
			{questions.map((question, idx) => (
				<Question question={question} key={idx} />
			))}
		</div>
	);
}

export default Questionnaire;
