import { post } from './api_helper'

export const login = data => post('/api/users/login', data)

export const register = data => post('/api/users/register', data)