import React from 'react';
import { Line } from '@ant-design/plots';

const Appraisalplot: React.FC = () => {
    const data = [
        { year: '2015', value: 6 },
        { year: '2016', value: 12 },
        { year: '2017', value: 14 },
        { year: '2018', value: 2 },
        { year: '2019', value: 14 },
        { year: '2020', value: 1.5 },
        { year: '2021', value: 9 },
        { year: '2022', value: 9 },
    ];

    const config = {
        data,
        width: 250,
        height: 200,
        autoFit: false,
        xField: 'year',
        yField: 'value',
        point: {
            size: 5,
            shape: 'diamond',
        },
        label: {
            style: {
                fill: '#aaa',
            },
        },
    };

    return (
        <div className='ml-6' style={{ width: '240px', marginRight: '15px' }}>
            <h1 className='my-4 pt-2 text-lg font-semibold'>
                Appraisals
            </h1>
            {/* <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} /> */}
            <Line {...config} />
        </div>
    );
};
export default Appraisalplot;