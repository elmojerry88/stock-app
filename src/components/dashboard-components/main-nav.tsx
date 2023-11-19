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
          Overview
        </Link>
        <Link
          href=""
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-slate-500"
        >
          Customers
        </Link>
        <Link
          href=""
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-slate-500"
        >
          Products
        </Link>
        <Link
          href=""
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-slate-500"
        >
          Settings
        </Link>
      </div>

    </nav>
  )
}
