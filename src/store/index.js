import { createStore } from "vuex";
import searchPhotosModule from "./search-photos-module";

export default createStore({
  modules: {
    searchPhotosModule: searchPhotosModule,
  },
});
