import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector } from 'react-redux';

const Account = () => {
  const page=useSelector(state=>state.pages)
  const pstring=useSelector(state=>state.pstring)
  const dispatch=useDispatch()
  const {WithdrawMoney,DepositMoney,IncreasePageNumber,PrintString}=bindActionCreators(actionCreators,dispatch);

  const fetchMoreData = async (val) => {
    PrintString(val);
  };
  return (
    <>
      <h1 style={{ marginTop: "70px", textAlign: "center" }}>
        Deposite/Withdraw Account Balance
      </h1>
      <div style={{ marginTop: "20px", textAlign: "center" }}>


{/* With normal dispose method      */}

      {/* <button className="btn btn-primary" onClick={()=>(dispatch(actionCreators.WithdrawMoney(100)))} style={{ marginRight: "6px",width:"4%"}} width="100">-</button>
      Update Balance
      <button className="btn btn-primary" onClick={()=>(dispatch(actionCreators.DepositMoney(100)))}  style={{marginLeft:'6px' ,width:"4%"}}>+</button> */}

{/* Withbindactioncreator */}

       <button className="btn btn-primary" onClick={()=>WithdrawMoney(100)} style={{ marginRight: "6px",width:"4%"}} width="100">-</button>
      Update Balance
      <button className="btn btn-primary" onClick={()=>DepositMoney(100)}  style={{marginLeft:'6px' ,width:"4%"}}>+</button>
      </div>

<h1>Page no:- {page}</h1>
      <button className="btn btn-primary" onClick={()=>IncreasePageNumber(1)}  style={{marginLeft:'6px' ,width:"4%"}}>+</button>

      <h1>Suffix String added is:{pstring}</h1>
<button className="btn btn-primary" onClick={()=>fetchMoreData('sharma')}  style={{marginLeft:'6px' ,width:"4%"}}>+</button>
    </>
  );
};

export default Account;
