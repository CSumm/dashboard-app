
import {LineChart, XAxis,YAxis,CartesianGrid,Line} from 'recharts';

export default function LiveChart({graphData}) {

    return (
        <div>
    <LineChart width={500} height={300} data={graphData}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
        </div>
    );
}