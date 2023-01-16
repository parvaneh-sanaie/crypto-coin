import React from 'react';
import { cleanup, render, act, screen } from '@testing-library/react';

import Header from '../index';

describe('<Header />', () => {
    it('Should be match to the snapshot', () => {
        let renderResult = null;
        act(() => {
            renderResult = render(<Header />);
        });
        expect(renderResult).toMatchSnapshot();
    });

    it('Should render navbar, homeLink and userProfileLink without progress bar', () => {
        expect.assertions(4);
        let renderResult = null;
        act(() => {
            renderResult = render(<Header />);
        });
        const navbar = screen.getByTestId('navbar');
        const homeLink = screen.getByTestId('homeLink');
        const userProfileLink = screen.getByTestId('userProfileLink');
        expect(navbar).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
        expect(userProfileLink).toBeInTheDocument();
        expect(renderResult.container.getElementsByClassName('progress-root').length).toEqual(0);
    });

    it('Should render progress bar', () => {
        expect.assertions(1);
        act(() => {
            render(<Header showProgress />);
        });
        const progressBar = screen.getByTestId('progressBar');
        expect(progressBar).toBeInTheDocument();
    });

    afterAll(cleanup);
});
