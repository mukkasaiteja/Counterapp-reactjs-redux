const red=(data=0,action)=>{
  if (action.type === 'inc' ) {
    return data+1;
    
  }else if(action.type === 'dec'){
    return data-1;
  }else if(action.type === 'reset'){
    return data=0
  }else{
    return data;
  }

}

export default red