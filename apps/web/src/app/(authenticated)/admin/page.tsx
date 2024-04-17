'use client'

import { RefreshCcwDot } from "@repo/ui/icons";
import { T_UserRole } from "@repo/types";
import { User } from "@ui/components/nextui/user";
import { Button } from "@ui/components/nextui/button";
import { Spinner } from "@ui/components/ui/spinner";
import { useProfile } from "@/hooks/use-profile";

export default function DashboardIndexPage(): JSX.Element {
  const { data: profile, error, isPending, refetch } = useProfile()
  return <>
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Blank Page</h1>
    </div>
    <div
      className="flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <div className="flex items-center gap-2">{isPending ? <Spinner /> : error ? <div>{error.message}</div> :
          <User avatarProps={{
            src: profile.image,
            alt: profile.name,
            isBordered: true,
            color: profile.role === T_UserRole.Super ? 'danger' : profile.role === T_UserRole.Admin ? 'success' : profile.role === T_UserRole.Moderator ? 'secondary' : 'primary'
          }}
            description={profile.email}
            name={profile.name} />}
          <Button color="primary" isIconOnly isLoading={isPending} onClick={() => { refetch() }} radius="full" size="sm"><RefreshCcwDot size={16} /></Button>
        </div>
      </div>
    </div>
  </>
}