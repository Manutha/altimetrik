import { createSlice } from '@reduxjs/toolkit'

const initialState : any = []

export const carSlice = createSlice({
    name : "listOfCars",
    initialState ,
    reducers :{
        addCar (state,action : any){
            return [...state,action.payload]
        }
    }
})


export const { addCar } = carSlice.actions

export default carSlice.reducer