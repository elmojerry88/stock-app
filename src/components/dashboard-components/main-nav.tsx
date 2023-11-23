import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    
    <nav
      className={cn("lg:space-x-6", className)}
      {...props}
    >
      <div className="flex items-center space-x-4">
        <Link
          href=""
          className="text-sm font-medium transition-colors hover:text-slate-500"
        >
          Polícia Nacional de Angola
        </Link>
  
      </div>

    </nav>
  )
}
