import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from 'react-redux';
import store from "./utils/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Main />}></Route>
              <Route path="/watch" element={<WatchPage />}></Route>
            </Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;