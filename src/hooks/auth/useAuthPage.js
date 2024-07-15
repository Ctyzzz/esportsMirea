import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthService from '../../services/auth/auth.service'
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

export const useAuthPage = () => {
	const [type, setType] = useState('login')

	const [newUser, setNewUser] = useState({
		login: "",
		password: "",
		username: "",
		firstname: "",
		lastname: "",
		birthday: ""
	})
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { setIsAuth } = useAuth()

	const { mutate, isLoading } = useMutation({
		mutationFn: ({ login, password }) => {
			AuthService.main(login, password, type)
		},
		onSuccess: () => {
			setIsAuth(true);
			reset();
		}
	})
	
	const onSubmit = data => {
		mutate(data)
	}

	const onLogin = data => {
		setNewUser({
			login: data.login,
			password: data.password,
			username: "",
			firstname: "",
			lastname: "",
			birthday: ""
		})
		navigate('/registration/createProfile')

	}
	const onUser = data => {
		setNewUser({
			...newUser,
			username: '',
			firstname: data.firstname,
			lastname: data.lastname,
			birthday: ''
		})
	}
	const onDate = data => {
		setNewUser({
			...newUser,
			username: data.username,
			birthday: data.birthday
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			onSubmit,
			isLoading,
			setType,
			type,
			onLogin,
			onUser,
			onDate
		}),
		[errors, isLoading]
	)
}