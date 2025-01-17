import { Card, CardContent } from "@/components/ui/card";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Building2, Factory, HelpCircle } from "lucide-react";
import Image from "next/image";
import BusinessCard from "./business-card";
import { Button } from "@/components/ui/button";

const ProfilePage = async () => {
  const { getUser, getUserOrganizations, getOrganization } =
    getKindeServerSession();

  const user = await getUser();
  const userOrgs = await getUserOrganizations();
  const org = await getOrganization();

  if (!user || !userOrgs) {
    return <div>Not logged in.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-semibold text-indigo-600">deputy*</div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <HelpCircle className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <LogoutLink>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white overflow-hidden">
                  <Image
                    src={user?.picture || ""}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                  />
                </div>
              </LogoutLink>
              <span className="text-sm text-gray-700">
                Hello, {user?.given_name} {user?.family_name}
              </span>
              <Button variant="ghost" asChild>
                <LogoutLink>Log out</LogoutLink>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="flex justify-between items-center border-b mb-8 py-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl overflow-hidden">
              <Image
                src={user?.picture || ""}
                alt="Profile Picture"
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                {user?.given_name} {user?.family_name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-gray-500">{user?.email}</span>
              </div>
            </div>
          </div>
          <button className="text-sm text-indigo-700 font-semibold rounded-lg px-4 py-1.5 bg-indigo-50 hover:bg-indigo-100">
            Edit Profile
          </button>
        </div>

        <Card className="w-64 bg-white">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Building2 className="w-8 h-8 text-indigo-600" />
                <div className="absolute -top-1 -right-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full ring-2 ring-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {org?.orgName}
                </h3>
                <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500">
                  <Factory className="w-4 h-4" />
                  {/* @ts-expect-error dsad */}
                  <span className="truncate">{org?.properties.industry}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Businesses Section */}
        <div className="flex items-center justify-between mb-6 mt-4">
          <h2 className="text-xl font-semibold text-gray-900">Businesses</h2>
          <button className="text-sm text-indigo-700 font-semibold rounded-lg px-4 py-1.5 bg-indigo-50 hover:bg-indigo-100">
            Add a new business
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          {userOrgs?.orgs?.map((org) => (
            <BusinessCard key={org.code} code={org.code} name={org.name} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
