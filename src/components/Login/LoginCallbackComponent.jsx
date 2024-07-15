import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAccess, setRefresh } from '../../redux/slices/auth';
import Cookies from "js-cookie";

const LoginCallbackComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const extractTokensFromUrl = () => {
      const urlParams = new URLSearchParams(location.search);
      const accessToken = urlParams.get('access_token');
      const refreshToken = urlParams.get('refresh_token');
      if (accessToken && refreshToken) {
        dispatch(setAccess(accessToken))
        dispatch(setRefresh(refreshToken))
        navigate("/profile")
      } else {
        console.error('Access token or Refresh token not found in URL');
      }
    };

    extractTokensFromUrl();
  }, [location.search]);



  return
};

export default LoginCallbackComponent;