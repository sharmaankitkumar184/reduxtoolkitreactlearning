const reducer=(state='ankit',action)=>
{
     if(action.type==='val')
     {
        return state + action.payload
     }
     else
     {
        return state;
     }
}

export default reducer;