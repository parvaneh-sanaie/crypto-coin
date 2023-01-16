import React from 'react';
import { cleanup, render, act } from '@testing-library/react';

import BarChart from '../index';

const graphConfig = [
    {
        name: 'Volume',
        dataKey: 'volume',
        fill: '#2347F3',
        stack: '0',
    },
];

const mockData = [
    {
        name: 'Indoex',
        base: 'TRX',
        quote: 'BTC',
        price: 0.000002985319917749,
        price_usd: 0.06235994453974276,
        volume: 792904418.50592,
        volume_usd: 49445475.563346,
        time: 1673829128,
    },
];

jest.mock('react-resize-detector', () => ({
    __esModule: true,
    default: () =>
        jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        })),
}));

describe('<BarChart />', () => {
    it('Should be match to the snapshot', () => {
        let renderResult = null;
        act(() => {
            renderResult = render(<BarChart barConfig={graphConfig} data={mockData} height={200} />);
        });
        expect(renderResult).toMatchSnapshot();
    });
    afterAll(cleanup);
});
