import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/rootReducer';
// import sagas from './sagas';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(thunk)

// const composeMiddle = composeEnhancers(middleware)

export default function configureStore(initialState={}) {
   const store = createStore(
       rootReducer,
       initialState,
       applyMiddleware(logger),
    //    middleware
   );
//    sagaMiddleware.run(sagas);
   return store

}
