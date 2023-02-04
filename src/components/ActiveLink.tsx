import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const style:React.CSSProperties = {
    color:'#0070f3',
    textDecoration:'underline'
}

interface ActiveLinkProps {
    href:string;
    text:string;

}

export const ActiveLink:FC<ActiveLinkProps> = ({ href, text }) => {

  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={ href }>
       <a style={ (href === asPath) ? style : {} } > { text } </a>
    </Link>
  )
}
