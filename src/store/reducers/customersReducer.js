export const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
export const GET_CUSTOMERS = 'GET_CUSTOMERS'

export const defaultCustomerState = {
	customers: []
}

export const customerReducer = (state = defaultCustomerState, action) => {
	switch (action.type) {
		case ADD_CUSTOMERS : {
			return { ...state, cash: state.cash + action.payload }
		}
		case GET_CUSTOMERS : {
			return { ...state, cash: state.cash - action.payload }
		}
		default : return state
	}
} // Функция reducer, которая содержит логику изменения state в зависимости от action