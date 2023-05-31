import { useState } from "react";
import { useEffect } from "react";
import { Layout } from "../Component/Layout/Layout";
import { Menu } from "../Component/Layout/Manu";
import { useSelector } from "react-redux";
import { setmanu } from "../store/manuf";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;
export const Manufacture = () => {
  const [Id, setId] = useState("");
  const [address, setaddress] = useState("");
  const [To , setTo] = useState("")
  const [From , setFrom] = useState('')
  const [Quantity , setQuantity] = useState("")
  const [Shipping , setShipping] = useState("")
  const { user } = useSelector((state) => state.user);
  const { tran } = useSelector((state) => state.tran)
  const getSingleData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/auth/single-data/${user.id}`,
        {
          method: "GET",
          redirect: "follow",
        }
      );
      const data = await response.json();
      if (data.success) {
        setId(data.user._id);
        setaddress(data.user.address);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [Id, address]);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitChangeHandler = async(e) => {
    e.preventDefault()
    try{
      dispatch(setmanu({
        _id: Id,
        address: address,
        To: To,
        From:From,
        Quantity: Quantity,
        Shipping: Shipping
      }))
      navigate('/transport')


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
            {tran && <div className="card m-3 p-3">
              <h6>Order_id : {tran?.id}</h6>
              <h6>Price : {tran?.Price}</h6>
            </div>}
          </div>
          <div className="col-md-9">
            <h1>Manufacturer</h1>
            <div className="m-1"></div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Order_ID"
                className="form-control"
                value={Id}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value = {To}
                placeholder="Shipping to"
                className="form-control"
                onChange = {(e) => {setTo(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value = {From}
                placeholder="shipping from"
                onChange = {(e) => {setFrom(e.target.value)}}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                value = {Quantity}
                placeholder="write a quantity"
                className="form-control"
                onChange = {(e) => {setQuantity(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="write a Address"
                className="form-control"
                value={address}
              />
            </div>
            <div className="mb-3">
              <Select
                bordered={false}
                placeholder="select a shipping"
                size="large"
                showSearch
                className="form-select"
                value = {Shipping}
                onChange = {(value) => {setShipping(value)}}
              >
                <Option value ='1'>1</Option>
                <Option value ='2'>2</Option>
                <Option value ='3'>3</Option>
                <Option value ='4'>4</Option>
              </Select>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" onClick= {submitChangeHandler}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
