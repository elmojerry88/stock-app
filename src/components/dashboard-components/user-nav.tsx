import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import ButtonLogout from "@/components/ButtonLogout"
import { HiOutlineLogout } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";

import { getServerSession } from "next-auth"
import Link from "next/link"

export async function UserNav() {

  const session= await getServerSession(nextAuthOptions)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback> <FaHouseUser  size={30}/> </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-slate-950" align="end" forceMount>
        <DropdownMenuLabel className="font-normal bg-slate-950">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session?.user.first_name} {session?.user.second_name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="https://github.com/elmojerry88/stock-app">Código fonte Front-End</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="https://github.com/elmojerry88/api_stock">Código font Back-End</Link>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem> </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ButtonLogout />
          <DropdownMenuShortcut> <HiOutlineLogout/> </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
