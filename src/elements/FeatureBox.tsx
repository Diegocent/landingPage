import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureBox = ({ icon, title, description }: Props) => {
  return (
    <Card className="bg-gray-800 border-none">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-bold ml-2 text-[#CA5937]">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};
