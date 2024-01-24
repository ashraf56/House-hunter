import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { HouseContext } from "../Context/ContextHouse";
import axios from "axios";


const getOwner = () => {
  let { user } = useContext(HouseContext)
  console.log(user);
  const { data: isOwner, isLoading, refetch } = useQuery({
    queryKey: ['isOwner', user],
    enabled: !!user && !!localStorage.getItem("house-token"),
    queryFn: async () => {
      const res = await axios.get(`https://house-hunter-server-lyart.vercel.app/alluser/owner/${user}`)

      console.log(res.data.role);
      return res.data.role;

    },
  })

  return [isOwner]
};

export default getOwner;