import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      {/* <Avatar>
        <AvatarImage src="me.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        MM
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Mahdi Mousavi</p>
        <p className="text-[12px] text-neutral-500">
          codewithMahdiMistrain@gmail.com
        </p>
      </div>
    </div>
  );
};

export default UserItem;
