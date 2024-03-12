import Body from "./components/Body"
import AppStore from "./utils/AppStore"
import { Provider } from "react-redux"

function App() {
  return(
    <div>

      <Provider store={AppStore}>

      <Body />
      </Provider>

    </div>
  )
}

export default App
