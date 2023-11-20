import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/dashboard-components/date-range-picker"
import { MainNav } from "@/components/dashboard-components/main-nav"
import TeamSwitcher from "@/components/dashboard-components/team-switcher"
import { UserNav } from "@/components/dashboard-components/user-nav"
import { ProfileForm } from "../profile-form"
import DashboardCards from "../card-dashboard"
import { WeaponForm } from "../WeaponForm"
import RegisterForm from "../RegisterForm"
import WeaponTable from "../WeaponTable"
import ReceiveTable from "../ReceiveTablex"
import UsersTable from "../UsersTables"


// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "",
// }

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
               <UserNav /> 
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            {/* <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2> */}
            <div className="flex items-center justify-end space-x-2">
              <CalendarDateRangePicker />
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4 ">
            <TabsList>
              <TabsTrigger value="overview">Dashboard</TabsTrigger>
              <TabsTrigger value="create-user">
                Adicionar agente
              </TabsTrigger>
              <TabsTrigger value="Adicionar arma">
                Adicionar arma              </TabsTrigger>
              <TabsTrigger value="Registrar">
                 Registrar
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <DashboardCards/>
            
                <WeaponTable/>
                <ReceiveTable />
                <UsersTable />
              
              
            </TabsContent>
            <TabsContent value="create-user" className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight">Criar novo Agente</h2>
                <ProfileForm/>
            </TabsContent>
            <TabsContent value="Adicionar arma" className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Adicionar nova arma no stock</h2>
                  <WeaponForm/>
            </TabsContent>
            <TabsContent value="Registrar" className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Registro de entrada e saída de arma</h2>
                  <RegisterForm/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
