import { useDispatch } from "react-redux";
import { logout } from '../configs/userSlice';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(logout())
    useEffect(() => {
        navigate('/login')
    }, [])
}