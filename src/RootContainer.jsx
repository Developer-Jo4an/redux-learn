import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_CASH, GET_CASH } from './store/reducers/cashReducer'

import './App.css'

const RootContainer = () => {
	const dispatch = useDispatch()
	const cashState = useSelector(state => state.cashReducer.cash)

	const addCash = amount => dispatch({ type: ADD_CASH, payload: amount })

	const getCash = amount => dispatch({ type: GET_CASH, payload: amount })

	return (
		<div className={'root-container'}>
			<div className={'bank-container'}>
				<div className={'bank-total'}>{ cashState }</div>
				<div className={'bank-buttons-wrapper'}>
					<button onClick={ () => addCash(+prompt()) } className={'bank-button add-cash'}>ADD</button>
					<button onClick={ () => getCash(+prompt()) } className={'bank-button get-cash'}>GET</button>
				</div>
			</div>
		</div>
	)
}

export default RootContainer