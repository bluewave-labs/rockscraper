"use client";

import {
    Card,
    CardDescription,
    CardTitle,
  } from "@src/components/ui/card";

const InfoCard = ({ title, description }: { title: string; description: string }) => (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );

  export default InfoCard