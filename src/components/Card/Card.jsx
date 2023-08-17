import card1 from "../../assets/photo_2023-06-08_11-22-13.jpg";
import card2 from "../../assets/photo_2023-06-08_11-22-28.jpg";
import card3 from "../../assets/photo_2023-06-08_11-22-32.jpg";


const Card = (props)=>{
const imges = [card1,card2,card3,card1]
let index = props.value.id;
   return (
      <div className="w-[250px] h-[300px] border ">
         <img className="w-[100%] h-[160px]" src={imges[index -1]} alt="" />
         <p className="p-[5px] text-[14px] mt-[3px]">{props.value.text}</p>
         <i className="mt-[7px] p-[5px] flex font-bold ml-[10px]">{props.value.location}</i>
         <span className="mt-[10px] p-[5px] flex justify-between">
            <h2 className="font-medium">{props.value.price}</h2>
            <button className="py-[3px] px-[20px] bg-[#333] text-[#fff] rounded-lg items-center mr-[5px] hover:bg-[#000] hover:ease-linear">{props.value.button}</button>
         </span>
       </div>
    )
}

export default Card