
import Vue from "vue";
import menuItems from "./menuItems";
import { tableData, tableHeader } from "./tableData";
Vue.mixin({
  data(){
    return{
      isOpen:false,
      menuItems,
      tableData,
      tableHeader
    }
  }
})