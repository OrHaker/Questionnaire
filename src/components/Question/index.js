import Radio from 'components/RadioInput';
import Select from 'components/SelectInput';
import { useState } from 'react';

const Question = ({ question }) => {
	const [answer, setAnswer] = useState({});

	const _renderInput = () => {
		switch (question.type) {
			case 'number':
				return <input type="number" onChange={e => setAnswer(e.target.value)} min={question.min} />;
			case 'radio':
				return (
					<Radio
						radiosData={[
							{ value: '1', title: question.title, label: 'Yes' },
							{ value: '0', title: question.title, label: 'No' },
						]}
						onChange={e => setAnswer(e.target.value)}
					/>
				);
			case 'select':
				return <Select options={question.options} onChange={e => setAnswer(e.target.value)} />;
			default:
				return null;
		}
	};

	return (
		<div className="question">
			<div className="question__title">{question.title}</div>
			{_renderInput()}
			{question.childItems &&
				question.childItems.map((subQuestion, idx) => {
					if (!subQuestion.parentAnswer || subQuestion.parentAnswer === answer) return <Question question={subQuestion} key={idx} />;
				})}
		</div>
	);
};

export default Question;
