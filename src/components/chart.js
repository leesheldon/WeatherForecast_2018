import lodash from "lodash";
import React from "react";
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine
} from "react-sparklines";

function calcAverage(data) {
	return lodash.round(lodash.sum(data) / data.length);
}

export default props => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{calcAverage(props.data)} {props.units}
			</div>
		</div>
	);
};
