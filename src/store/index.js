import { configureStore } from "@reduxjs/toolkit";

import createUser from "./auth";
import createmanu from "./manuf";
import createtran from "./trans";
const store = configureStore({
  reducer: {
    user: createUser.reducer,
    manu: createmanu.reducer,
    tran: createtran.reducer,
  },
});
export default store;
