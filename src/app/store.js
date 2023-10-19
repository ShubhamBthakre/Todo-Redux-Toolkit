// React-Redux and Redux Toolkit are two JavaScript libraries that are commonly used together to manage the state of a React application, particularly when dealing with complex and large-scale applications.

/**1. Redux:
   - Redux is a predictable state management library for JavaScript applications. It is often used in conjunction with React, but it can be used with other JavaScript frameworks or libraries as well. Redux helps you manage the state of your application in a centralized and predictable manner.

   Key concepts in Redux:
   - **Store**: Redux maintains a single, centralized store that holds the entire state of the application. This state is read-only, and any changes must be done through actions.
   - **Actions**: Actions are payloads of information that send data from your application to the store. They are plain JavaScript objects with a type property.
   - **Reducers**: Reducers are functions that specify how the application's state changes in response to actions. They take the current state and an action and return the new state.
   - **Middleware**: Middleware in Redux allows you to add custom behavior to the dispatch process, like logging, asynchronous operations, or routing. **/



/**   2. React-Redux:
   - React-Redux is the official library that provides the integration between React and Redux. It simplifies the process of connecting your React components to the Redux store, allowing your components to access and update the application's state.

   Key concepts in React-Redux:
   - **Provider**: React-Redux provides a `<Provider>` component that you wrap your entire application with. It passes the Redux store down to all components, so they can access it using the `connect` function or hooks.
   - **connect function**: `connect` is a higher-order component that connects React components to the Redux store. It takes mapStateToProps and mapDispatchToProps functions to specify which parts of the state and which actions should be available in the component.
   - **Hooks**: React-Redux also provides hooks like `useSelector` and `useDispatch` to access the store and dispatch actions in functional components. **/ 


/**    3. Redux Toolkit:
   - Redux Toolkit is an official opinionated set of utilities and helpers for Redux. It's designed to simplify the process of writing Redux code, making it more concise and easier to understand.

   Key features of Redux Toolkit:
   - **createSlice**: A function that simplifies the creation of Redux reducer logic and action creators. It allows you to define the initial state and a set of reducer functions for a specific slice of the state.
   - **configureStore**: A function that simplifies the creation of a Redux store. It automatically configures the store with essential settings and middleware.
   - **createAsyncThunk**: A helper function for handling asynchronous actions. It generates action creators and reducers for common async scenarios.
   - **Immutability**: Redux Toolkit encourages the use of immutability when updating the state, making it easier to reason about state changes.

In summary, Redux is a state management library, React-Redux is the official way to use Redux with React, and Redux Toolkit is a set of tools and conventions that simplifies the process of working with Redux and React. Together, they provide a powerful and efficient way to manage the state of your React applications. */









//step-1: import configureStore from @reduxjs/toolkit and create a store, in step 2 we have to create reducers and have to give reference to reducers 
//Every applicaton has one store only it means single source of truth

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store=configureStore({
    reducer:todoReducer
});

