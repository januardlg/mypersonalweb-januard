import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const FooterSection = () => {
  return (
    <div className="flex justify-center py-14 items-center">
      <div className="text-center">
        <p className="text-6xl font-semibold leading-[84px]">Get in Touch.</p>
        <p className="text-lg font-light">So that we can talk more </p>
        <div className="pt-14 flex justify-center items-center space-x-14">
          <MdEmail fontSize={48} color="black" />,
          <FaLinkedin fontSize={44} color="black" />
        </div>
      </div>
    </div>
  );
};
