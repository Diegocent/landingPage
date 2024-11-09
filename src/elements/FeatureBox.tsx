import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureBox = ({ icon, title, description }: Props) => {
  return (
    <Card className="bg-[#3B505A] border-none min-h-60">
      <CardContent className="p-6">
        <div className="flex items-center mb-4 text-[rgb(123,210,225)]">
          {icon}
          <h3 className="ml-2 text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};
