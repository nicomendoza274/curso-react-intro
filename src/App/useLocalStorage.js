/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, intialState({initialValue}))
  const { sincronizedItem, 
    error,
    loading,
    item 
  } = state

  // ACTIONS CREATOR
  const onError = (error) => dispatch({
    type: actionTypes.error, 
    payload: error 
  })

  const onSucces = (parsedItem) => dispatch({
    type: actionTypes.success, 
    payload: parsedItem 
  })
  
  const onSave = (newItem) => dispatch({
    type: actionTypes.save, 
    payload: newItem 
  })

  const onSincronize = () => dispatch({
    type: actionTypes.sincronize
  })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        onSucces(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem);
      //setItem(newItem);
      onSave(newItem)
    } catch (error) {
      onError()
    }
  }

  const sincronizeItem = () => {
    onSincronize()
  }

  return {
    item, 
    saveItem, 
    loading, 
    error,
    sincronizeItem
  }
}

const intialState = ({initialValue}) =>({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
}

const reducerObjec = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
})

const reducer = (state, action) => {
  return reducerObjec(state, action.payload)[action.type] || state
}

export { useLocalStorage }