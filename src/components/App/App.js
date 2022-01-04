import Questions from 'Questions.json';

import Questionnaire from 'components/Questionnaire';

import './style.scss';

function App() {
	return (
		<div className="App">
			<Questionnaire questions={Questions.patientQuestions} />
		</div>
	);
}

export default App;
