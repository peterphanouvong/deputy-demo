// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// export default async function Dashboard() {
//   const { getClaim, getOrganization } = getKindeServerSession();
//   const orgPropsClaim = (await getClaim(
//     "organization_properties",
//     "access_token"
//   )) as any;

//   const org = await getOrganization();

//   const orgIndustry =
//     orgPropsClaim?.value?.kp_org_industry?.v || "Industry not found";

//   return (
//     <div className="container">
//       <div className="card start-hero">
//         <p className="text-body-2 start-hero-intro">Woohoo!</p>
//         <p className="text-display-2">
//           Your authentication is all sorted.
//           <br />
//           Build the important stuff.
//         </p>
//       </div>
//       <section className="next-steps-section">
//         <p>Org name: {org?.orgName}</p>
//         <p>Industry: {orgIndustry}</p>
//         <h2 className="text-heading-1">Next steps for you</h2>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { HelpCircle } from "lucide-react";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import BusinessCard from "./business-card";

const ProfilePage = async () => {
  const { getUser, getUserOrganizations } = getKindeServerSession();

  const user = await getUser();
  const userOrgs = await getUserOrganizations();

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

        {/* Businesses Section */}
        <div className="flex items-center justify-between mb-6 mt-4">
          <h2 className="text-xl font-semibold text-gray-900">Businesses</h2>
          <button className="text-sm text-indigo-700 font-semibold rounded-lg px-4 py-1.5 bg-indigo-50 hover:bg-indigo-100">
            Add a new business
          </button>
        </div>

        {/* Empty State Card */}
        {/* <div className="border border-gray-200 rounded-lg p-8 text-center max-w-md">
          <p className="text-gray-600 mb-2">
            You aren't currently a member of any business in Deputy.{" "}
            <button className="text-indigo-600 hover:text-indigo-700 font-bold">
              Create a new business
            </button>{" "}
            or wait to be invited by your manager.
          </p>
        </div> */}

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