import { post, get } from './api_helper'


export const addToCart = (id) => post(`/api/cart/${id}`)

export const getUserCart = () => get('/api/users')
