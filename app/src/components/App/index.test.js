import { render } from '@testing-library/react';
// import { LocalStorageMock } from '@react-mock/localstorage';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from './index';
// import { LocalStorageKeys } from '../../constants/LocalStorageKeys';

describe('<App />', () => {
    it('Should render component properly', () => {
        const { getByTestId } = render(
            // <LocalStorageMock items={{ [LocalStorageKeys.RECIPES]: [] }}>
                <Provider store={store}>
                    <App />
                </Provider>,
            // </LocalStorageMock>,
        );
        expect(getByTestId('app')).toBeInTheDocument();
    });
});