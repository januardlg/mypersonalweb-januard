import Router, { useRouter } from "next/router";
import { LINK_MASTER_DATA } from "@/data-master/data-master";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const FooterSection = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center py-14 items-center bg-[#F4F6F7]">
      <div className="text-center">
        <p className="text-6xl font-semibold leading-[84px]">Get in Touch.</p>
        <p className="text-lg font-light">So that we can talk more </p>
        <div className="pt-14 flex justify-center items-center space-x-14">
          <MdEmail
            fontSize={48}
            color="black"
            onClick={() => router.push("mailto:januargaol48@gmail.com")}
            style={{ cursor: "pointer" }}
          />
          <Link href={LINK_MASTER_DATA.LinkedIn} target={"_blank"}>
            <FaLinkedin fontSize={40} color="black" />
          </Link>
        </div>
      </div>
    </div>
  );
};
