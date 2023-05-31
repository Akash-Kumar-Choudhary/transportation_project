import { Layout } from "../Component/Layout/Layout";
import { useEffect, useState } from "react";
import { Menu } from "../Component/Layout/Manu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { settran } from "../store/trans";
import { useSelector } from "react-redux";
export const Transport = () => {
  const { manu } = useSelector((state) => state.manu);

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [Id , setId] = useState("")
  const [price , setprice] = useState("")
  useEffect(() => {
    if(manu){
      setId(manu?._id)
    }
  } , [])
  console.log(manu);
  const submitChangeHandler = async(e) => {
    e.preventDefault()
    try{
      dispatch(settran({
        id: Id,
        Price: price
      }))
      navigate("/manufacture")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <Layout>
      <div className="container-fluid mt-5 ml-4">
        <div className="row">
          <div className="col-md-3">
            <Menu />
            {manu && <div className="card m-3 p-3">
              <h6>Order_id : {manu?._id}</h6>
              <h6>Shipping To : {manu?.To}</h6>
              <h6>Shipping From : {manu?.From}</h6>
              <h6>Quantity : {manu?.Quantity}</h6>
              <h6>Address : {manu?.address}</h6>
            </div>}
          </div>
          <div className="col-md-9">
            <h1>Transporter</h1>
            <div className="mb-3">
              <input
                type="text"
                value = {Id}
                placeholder="Order_Id"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                value = {price}
                placeholder="write a price"
                className="form-control"
                onChange = {(e) => {setprice(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" onClick={submitChangeHandler}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
