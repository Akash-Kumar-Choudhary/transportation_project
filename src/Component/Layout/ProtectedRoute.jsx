import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { setUser } from "../../store/auth"

export const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const GetUser = async() => {
        try{
            const response = await fetch("http://localhost:8000/api/v1/auth/test",{
                method : "GET",
                headers : {
                    Authorization : `${localStorage.getItem('token')}`,
                    redirect: 'follow'
                }
            })
            const data1 = await response.json()
            if(data1.success){
                dispatch(setUser({
                    ...user,
                    id : data1.data.id,
                    password:data1.data.password,
                    email:data1.data.email ,
                    address : data1.data.address,
                    token : `${localStorage.getItem('token')}`,
                }))
            }
            else {
                <Navigate to='/login' />
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(!user){
            GetUser()
        }
    },[user , GetUser])
    if(localStorage.getItem('token')){
        return children
    }
    else{
        return <Navigate to = '/login' />
    }
}