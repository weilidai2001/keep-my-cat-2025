import Link from "next/link";

const Button = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="block text-center cursor-pointer outline-none text-black bg-transparent border border-black rounded-[15px] uppercase px-[15px] py-[5px] text-[18px] mx-auto my-[20px]"
  >
    {text}
  </Link>
);

export default Button;
