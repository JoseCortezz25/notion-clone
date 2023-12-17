import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
})


const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo-icon.svg"
        alt="Logo"
        width="25"
        height="25"
        className="dark:hidden"
      />
      <Image
        src="/logo-icon.svg"
        alt="Logo"
        width="25"
        height="25"
        className="hidden dark:block"
      />
      <p className={cn('font-semibold', font.className)}>
        Idea
      </p>
    </div>
  )
}

export { Logo }