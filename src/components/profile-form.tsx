"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "O nome deve conter mais de 2 caracteres.",
    })
    .max(30, {
      message: "O bone não deve conter mais de 30 caracteres.",
    }),
  unidade: z
    .string()
    .min(3, {
        message: "A sua unidade deve conter mais de 3 caracteres.",
    })
    .max(20, {
        message: "O bone não deve conter mais de 20 caracteres.",
    }),
  
  category: z 
    .string()
    .min(5, {
        message: "A sua patente deve conter mais de 5 caracteres.",
    })
    .max(20, {
        message: "O patente não deve conter mais de 20 caracteres.",
    }),
  nip: z 
  .string()
  .min(8, {
      message: "O seu nip deve conter mais de 8 caracteres.",
  })
  .max(11, {
      message: "O seu nip não deve conter mais de 11 caracteres.",
  }),
  division:  z 
  .string()
  .min(8, {
      message: "A sua unidade deve conter mais de 8 caracteres.",
  })
  .max(11, {
      message: "A sua unidade não deve conter mais de 11 caracteres.",
  }),


})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  
  
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-2 items-center border rounded-md p-5">
                <div className="mx-5">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input className="border-white" placeholder="Nome completo" {...field} />
                        </FormControl>
                        <FormDescription>
                            Insira o nome completo, não é permitido alcunha ou nome que não faz parte do registro
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="mx-5">
                    <FormField
                    control={form.control}
                    name="division"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Unidade</FormLabel>
                        <FormControl>
                            <Input className="border-white" placeholder="PIR" {...field} />
                        </FormControl>
                        <FormDescription>
                            Insira a unidade que faz parte. <br />Ex: SIC, PIR
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="mx-5">
                    <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Patente / Função</FormLabel>
                        <FormControl>
                            <Input className="border-white" placeholder="Sargento" {...field} />
                        </FormControl>
                        <FormDescription>

                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="mx-5">
                    <FormField
                    control={form.control}
                    name="nip"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>NIP</FormLabel>
                        <FormControl>
                            <Input className="border-white" placeholder="000123456789" {...field} />
                        </FormControl>
                        <FormDescription>
                            O nip deve corresponder ao agente 
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                </div>
                <div>
                <Button className="mt-5 mx-5 w-72 h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Criar</Button>

                </div>
                
            </div>
      </form>
    </Form>
  )
}
