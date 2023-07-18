import { useState } from "react";

export const useModal = (initialValue= false) => {

    const [isOpenMenu, setIsOpenMenu] = useState(initialValue);
    const openModalMenu= ()=>setIsOpenMenu(true);
    const closeModalMenu=()=> {setIsOpenMenu(false)};
  
  return [isOpenMenu, openModalMenu, closeModalMenu];
};

