const initialState = {

  
  ItemDeleted : [],

}

const reducer = (state=initialState,action)=>{
    
    
  if(action.type=='ItemDeleted'){

    return{
      ...state,
      ItemDeleted : action.newArray,
    }

  }

    

    return state;

}

export default reducer;