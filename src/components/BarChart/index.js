import _ from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ComposedChart, XAxis, YAxis, Bar, Legend, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import dataFormatter from '../../utils/formatter';

function BarChart({ data, height, barConfig, tooltip, xAxisFormatterType, xAxisDataKey }) {
    const [disabled] = useState([]);
    const payload = _.toPairs(barConfig).map((pair) => ({
        dataKey: pair[0],
        color: pair[1].fill,
        value: pair[1].name,
    }));

    return (
        <ResponsiveContainer width="100%" height={height}>
            <ComposedChart height={height} data={data}>
                <XAxis
                    dataKey={xAxisDataKey}
                    style={{ fontSize: '10px', fontWeight: '700' }}
                    tickFormatter={xAxisFormatterType.toLowerCase()}
                    padding={{ left: 10, right: 30 }}
                    color="#e31958"
                />
                <YAxis style={{ fontSize: '10px', fontWeight: '700' }} tickFormatter={dataFormatter} />

                <Legend
                    layout="horizontal"
                    verticalAlign="top"
                    align="left"
                    payload={payload}
                    wrapperStyle={{
                        fontSize: '12px',
                        top: 0,
                        left: 0,
                        marginTop: -20,
                        transform: 'translate(1, 0)',
                    }}
                />

                <CartesianGrid fill="#f8fafa" fillOpacity={1} horizontal={false} vertical={false} />

                {_.toPairs(barConfig)
                    .filter((pair) => !_.includes(disabled, pair[0]))
                    .map((pair) => {
                        const key = new Date().getMilliseconds() + Math.random();
                        return (
                            <Bar key={key} stackId={pair[1].stack} background={{ fill: '#FFFFFF' }} maxBarSize={50} />
                        );
                    })}
                {_.toPairs(barConfig)
                    .filter((pair) => !_.includes(disabled, pair[0]))
                    .map((pair) => {
                        const key = new Date().getMilliseconds() + Math.random();
                        return (
                            <Bar
                                key={key}
                                name={pair[1].name}
                                dataKey={pair[1].dataKey}
                                stackId={pair[1].stack}
                                fill={pair[1].fill}
                                fillOpacity={1}
                                maxBarSize={50}
                            />
                        );
                    })}

                {tooltip && <Tooltip />}
            </ComposedChart>
        </ResponsiveContainer>
    );
}
BarChart.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    tooltip: PropTypes.bool,
    barConfig: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            dataKey: PropTypes.string.isRequired,
            fill: PropTypes.string.isRequired,
            stack: PropTypes.string.isRequired,
        }),
    ),
    xAxisDataKey: PropTypes.string,
    xAxisFormatterType: PropTypes.oneOf(['hour', 'month', 'days', 'name']),
};

BarChart.defaultProps = {
    tooltip: false,
    xAxisDataKey: 'date',
    xAxisFormatterType: 'name',
    barConfig: [],
};

export default BarChart;
