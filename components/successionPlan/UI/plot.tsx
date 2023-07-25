import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{
    name: '2015',
    uv: 6,
    amt: 20
},
{
    name: '2016',
    uv: 12,
    amt: 20
},
{
    name: '2017',
    uv: 14,
    amt: 20
},
{
    name: '2018',
    uv: 17,
    amt: 20
},
{
    name: '2019',
    uv: 2,
    amt: 20
},
{
    name: '2020',
    uv: 13,
    amt: 20
},
{
    name: '2021',
    uv: 2.5,
    amt: 20
},
{
    name: '2022',
    uv: 10,
    amt: 20
},
];

const AppraisalPlot = (
    <LineChart width={250} height={250} data={data} margin={{ top: 25, right: 25, }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
);

export default AppraisalPlot