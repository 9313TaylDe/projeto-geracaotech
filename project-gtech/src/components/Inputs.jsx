export default function Inputs({ title, id, name, placeholder }) {
  return (
    <div className="flex flex-col border-2 gap-1">
      <label
        className="text-[14px] 
          font-bold lg:text-[16px] text-[#474747]"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="
        bottao_input  
        w-full 
          p-3 
          text-[14px] 
          lg:text-[16px] 
          text-[#666666] 
          bg-[#eeeeee] focus:outline-none
          border-round-xs"
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
