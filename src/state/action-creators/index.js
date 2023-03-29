export const DepositMoney=(amount)=>
{
return (dispatch)=>
{
    dispatch(
        {
            type:'deposit',
            payload:amount
        }
    )
}
}


export const WithdrawMoney=(amount)=>
{
    return (dispatch)=>
{
    dispatch(
        {
            type:'withdraw',
            payload:amount
        }
    )
}
}

export const IncreasePageNumber=(pages)=>
{
    return (dispatch)=>
{
    dispatch(
        {
            type:'page',
            payload:pages
        }
    )
}
}

export const PrintString=(val)=>
{
    return (dispatch)=>
{
    dispatch(
        {
            type:'val',
            payload:val
        }
    )
}
}