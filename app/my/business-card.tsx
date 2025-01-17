import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { KeyRound, MapPin, User } from "lucide-react";

const BusinessCard = (props: { code: string; name: string }) => {
  return (
    <Card className="w-80 p-6 bg-white rounded-3xl">
      <CardContent className="p-0 space-y-6">
        {/* Logo and Title */}
        <div className="space-y-1 text-center">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-indigo-900 text-2xl font-semibold">
              deputy
            </span>
          </div>
          <h2 className="text-indigo-900 text-xl font-medium">{props.name}</h2>
          <p className="text-gray-500">Trial: 9 days left</p>
        </div>

        {/* Info Items */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <KeyRound className="w-5 h-5 text-teal-600" />
            <span className="text-gray-600">System Administrator</span>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-teal-600" />
            <span className="text-gray-600">1 Location</span>
          </div>

          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-teal-600" />
            <span className="text-gray-600">1 Person</span>
          </div>
        </div>

        {/* Settings Button */}
        <div className="flex justify-between items-center gap-3">
          <Button variant={"ghost"} className="w-full">
            Settings
          </Button>
          <Button variant="secondary" className="w-full">
            Open
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
