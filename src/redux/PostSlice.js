import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk('post/getPost', async() => {
    const resposnse = await axios.get("https://rose-combative-sheep.cyclic.app/posting");
    return resposnse.data
});

export const createPost = createAsyncThunk('post/createPost', async({body, creator, image}) => {
    const resposnse = await axios.post("https://rose-combative-sheep.cyclic.app/posting", {
        body, creator, image
    });
    return resposnse.data
});

const postEntity = createEntityAdapter({
    selectId : (post) => post._id
})

const postSlice = createSlice({
    name : 'post',
    initialState : postEntity.getInitialState(),
    extraReducers : {
        [getPost.fulfilled] : (state, action) => {
            postEntity.setAll(state, action.payload);
        },
        [createPost.fulfilled] : (state, action) => {
            postEntity.addOne(state, action.payload);
        },
    }
})

export const postSelector = postEntity.getSelectors(state => state.post);
export default postSlice.reducer 