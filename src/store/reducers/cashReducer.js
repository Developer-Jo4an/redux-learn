export const ADD_CASH = 'ADD_CASH'
export const GET_CASH = 'GET_CASH'

export const cashDefaultState = {
	cash: 0
} // Дефолтное состояние

export const cashReducer = (state = cashDefaultState, action) => {
	switch (action.type) {
		case ADD_CASH : {
			return { ...state, cash: state.cash + action.payload }
		}
		case GET_CASH : {
			return { ...state, cash: state.cash - action.payload }
		}
		default : return state
	}
} // Функция reducer, которая содержит логику изменения state в зависимости от action