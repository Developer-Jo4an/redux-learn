import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import { store } from './store/store'

const App = () => {
	return (
		<Provider store={ store }>
			<RootContainer />
		</Provider>
	)
}

export default App
