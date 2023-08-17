import { useState } from "react";
import Card from "../components/Card/Card";
import { Cards } from "../utils/Constants";

const Home = () => {
     const [post, setPost] = useState(Cards)
     const [input, setInput] = useState("")

     const handleChange = (e)=>{
          let val = input
          let str = e.target.value;
          setInput(str);
          if(str.length > input.length){
               const filter = post.filter((value)=>value.location.includes(str))
               setPost(filter)
          }else{
               setPost(Cards)
          }
     }
     return (
          <div className="container mx-auto px-[40px] py-[20px]">
               <span className="flex mb-[40px] ml-[450px]">
                    <input value={input} onChange={(e) => handleChange(e)} placeholder="search" className="shadow-md bg-[#ffd700] rounded-lg pl-[20px] text-[#333]" type="text" />
                    <button className=" px-[10px] py-[8px] bg-red-600 rounded-md ml-[20px]  hover:bg-[#ffd700]  hover:ease-linear duration-75">search</button>
               </span>

               <div className="flex justify-between">
                    {post.map((value) => {
                         return <Card value={value} key={value.id} />
                    })}
               </div>

          </div>
     )
}

export default Home