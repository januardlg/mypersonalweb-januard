export const Chip = ({ label }: { label: number }) => {
  return (
    <div className="flex items-center px-2 py-1 rounded-[10px] bg-[#F4F6F7] text-[#1F242C] text-xs w-fit">
       <p>{label === 0 ? 'Work' : 'Personal'}</p>
    </div>
  );
};
