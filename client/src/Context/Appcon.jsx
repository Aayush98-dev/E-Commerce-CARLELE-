import { useContext, useEffect } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const Appcon = createContext();

export const AppProviderr = ({ children }) => {

    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY

    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [isOwner, setIsOwner] = useState(null)
    const [showLogin, setShowLogin] = useState(null)
    const [pickupDate, setPickupDate] = useState("")
    const [returnDate, setReturnDate] = useState("")

    const [cars, setCars] = useState([])

    // Function to check if user is logged in

    // const fetchUser = async()=>{
    //     try {
    //         const {data} = await axios.get('/api/user/data')
    //         if (data.success){
    //             setUser (data.user)
    //             setIsOwner(data.user.role === 'owner')
    //         }else{
    //             navigate('/')
    //         }
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // };

    const [dashboardData, setDashboardData] = useState(null);

    const fetchUser = async (token) => {
        if (!token) return;

        try {
            const { data } = await axios.get("/api/user/data");

            if (data.success) {
                setUser(data.user);
                setIsOwner(data.user.role === "owner");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.log("Fetch user error:", error.response || error.message);
            toast.error("Session expired. Please log in again.");
            logOut();
        }
    };
    const fetchDashboardData = async () => {
        try {
            const { data } = await axios.get('/api/owner/dashboard');

            if (data.success) {
                setDashboardData(data.dashboardData);
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    };

    // fucntio tofetch all cars from backend
    const fetchCars = async () => {
        try {
            const { data } = await axios.get('/api/user/cars')
            data.success ? setCars(data.cars) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    };

    // user can logout the website
    const logOut = () => {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setIsOwner(false)
        axios.defaults.headers.common['Authorization'] = ''
        toast.success('You have been Loged Out')
    };

    // usereffect to retureive locat storage
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     setToken(token)
    //     fetchCars()
    // }, [])
    useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        setToken(token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        fetchUser(token);
        fetchCars(); // <-- Now safe
        fetchDashboardData();
    }
    }, []);

    // useeffect to fetch user data token is available
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            fetchUser(token)
        }
    }, [token]);

    const value = {
        navigate, currency, axios, user, setUser, token, setToken, isOwner, setIsOwner, fetchUser, showLogin, setShowLogin, logOut, fetchCars,
        cars, setCars, pickupDate, setPickupDate, returnDate, setReturnDate, dashboardData, setDashboardData, fetchDashboardData
        
    }

    return (
        <Appcon.Provider value={value} >
            {children}
        </Appcon.Provider>

    )
}

export const useAppContext = () => {
    return useContext(Appcon)
}
