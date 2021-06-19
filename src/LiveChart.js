
import {LineChart, XAxis,YAxis,CartesianGrid,Line} from 'recharts';

export default function LiveChart({graphData}) {

    console.log(graphData);
    return (
        <div>
    <LineChart width={500} height={300} data={graphData}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>
        </div>
    );
}