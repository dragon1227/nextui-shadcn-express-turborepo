'use client'

import { useProfile } from "@/hooks/use-profile";
import { User } from "@ui/components/nextui/user"
import { Button } from "@ui/components/nextui/button"
import { Spinner } from "@ui/components/ui/spinner";
import { RefreshCcwDot } from "lucide-react";
import { T_UserRole } from "@repo/types/user";

export default function DashboardIndexPage() {
  const { data: profile, error, isPending, refetch } = useProfile()
  return <>
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Blank Page</h1>
    </div>
    <div
      className="flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm" x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <div className="flex items-center gap-2">{isPending ? <Spinner /> : error ? <div>{error.message}</div> :
          <User name={profile?.name} description={profile?.email} avatarProps={{
            src: profile?.image,
            alt: profile?.name,
            isBordered: true,
            color: !profile ? 'default' : profile.role == T_UserRole.Super ? 'danger' : profile.role === T_UserRole.Admin ? 'success' : profile.role === T_UserRole.Moderator ? 'secondary' : 'primary'
          }} />}
          <Button isIconOnly isLoading={isPending} onClick={() => refetch()} radius="full" size="sm" color="primary"><RefreshCcwDot size={16} /></Button>
        </div>
      </div>
    </div>
  </>
}