import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			if (!action.payload.data) {
				return state;
			}

			return state.concat([action.payload.data]);
		// Method 02: return [ action.payload.data, ...state];

		// [city,city,city,...]
		// NOT [city, [city, [city, ...]]]

		default:
			return state;
	}
}
