import { ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function ButtonLoading() {
  return (
    <Button className="w-full h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      A cadastrar...
    </Button>
  )
}

export function ButtonProcess() {
    return (
      <Button className="w-full h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Processando...
      </Button>
    )
  }
