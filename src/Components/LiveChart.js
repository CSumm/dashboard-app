
import {XAxis,YAxis,Area,AreaChart,Tooltip} from 'recharts';
import './LiveChart.css';

export default function LiveChart({graphData}) {

    console.log(graphData);
    return (
        <div className="live-graph-block">
            <h3 className="graph-heading">Current water level (metres) by hour</h3>
            <AreaChart
  width={730}
  height={250}
  data={graphData}
  margin={{
    top: 20, right: 20, bottom: 20, left: 20,
  }}
>
  <XAxis dataKey="name" />
  <YAxis />
  <Area dataKey="value" stroke="#38afcd" fill="#38afcd" />
  <Tooltip />
</AreaChart>
        </div>
    );
}