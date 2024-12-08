import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { dbFire } from "./Firebase";

const initialState = {
  userList: [],
};

export const addUser = createAsyncThunk("user/addUser", async (data) => {
  const res = await addDoc(collection(dbFire, "blog"), data);
  console.log(res.id);
  const newUser = {
    id: res.id,
    ...data,
  };
  return newUser;
});

export const viewUser = createAsyncThunk("user/viewUser", async () => {
  const res = await getDocs(collection(dbFire, "blog"));

  const arr = [];
  res.forEach((doc) => {
    const newBlog = {
      id: doc.id,
      ...doc.data(),
    };
    arr.push(newBlog);
  });
  return arr;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  await deleteDoc(doc(dbFire, "blog", id));
  return id;
});

export const editUser = createAsyncThunk("user/editUser", async (data) => {
  const { id } = data;
  await setDoc(doc(dbFire, "blog", id), data);
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.userList.push(action.payload);
        console.log(action.payload);
      })

      .addCase(viewUser.fulfilled, (state, action) => {
        state.userList = action.payload;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        const id = action.payload;
        const filterData = state.userList.filter((blog) => {
          return blog.id !== id;
        });
        state.userList = filterData;
      })

      .addCase(editUser.fulfilled, (state, action) => {
        const { id } = action.payload;
        const index_number = state.userList.findIndex((blog) => {
          return blog.id === id;
        });
        if (index_number != -1) {
          state.userList[index_number] = action.payload;
        }
      });
  },
});

export default userSlice.reducer;
