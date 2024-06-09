import {
  BiIdCard,
  BiCategoryAlt,
  BiChat,
  BiSolidChevronsUp,
} from "react-icons/bi";

export default function Nav() {
  return (
    <div className="p-8 flex justify-between items-center">
      <BiIdCard className="text-white w-8 h-8" />
      <BiSolidChevronsUp className="text-white w-8 h-8" />
      <div className="bg-white rounded-full">
        <img src="https://i.imgur.com/xPF0mVI.png" className="w-16 h-16 p-2" />
      </div>    
      <BiCategoryAlt className="text-white w-7 h-7" />
      <BiChat className="text-white w-8 h-8" />
    </div>
  );
}
