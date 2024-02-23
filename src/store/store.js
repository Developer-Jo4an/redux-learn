import { createStore, combineReducers } from 'redux'
import { cashReducer } from './reducers/cashReducer'
import { customerReducer } from './reducers/customersReducer'

const rootReducer = combineReducers({
	cashReducer,
	customerReducer
})

export const store = createStore(rootReducer) // Store