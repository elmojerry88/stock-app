
import { useToast } from "@/components/ui/use-toast";

export default function ErrorAxios(){
    const { toast } = useToast()

    return(
        toast({
            variant: "destructive",
            title: "Erro",
            description: "Ocorreu algum erro"
        })
    )
}
 
