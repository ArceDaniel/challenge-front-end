import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/NavBar.module.css";


interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
    }


const CustomLink = ({ href, title, className = "" }:CustomLinkProps) : JSX.Element => {
    const router = useRouter();
    return (
      <Link href={href} className={`${className} ${style.link} ${
        router.pathname === href ? style.active : ""
      }`}>
        {title}
      </Link>
    );
  };

  export default CustomLink;