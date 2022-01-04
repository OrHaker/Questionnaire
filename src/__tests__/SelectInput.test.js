import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Select from 'components/SelectInput';

it('should render without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Select />, div);
});

it('should renders select correctly', () => {
	const { getByTestId } = render(<Select options={['testOption']} />);
	expect(getByTestId('select')).toHaveTextContent('testOption');
});
