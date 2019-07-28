export const INCREMENT = "counter/increment";
export const DECREMENT = "counter/decrement";
export const SET_VALUE = "counter/set_value";

export const incrementAction = () => ({
	type: INCREMENT
});

export const decrementAction = () => ({
	type: DECREMENT
});

export const setValueAction = (payload: number) => ({
	type: SET_VALUE,
	payload
});
