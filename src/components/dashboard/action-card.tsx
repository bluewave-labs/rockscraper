"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@src/components/ui/card";
import { Button } from "../ui/button";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const ActionCard = ({
    title,
    description,
    href,
    buttonText,
}: {
    title: string;
    description: string;
    href: string;
    buttonText: string;
}) => (
    <Card variant="clickable" asChild>
        <Link href={href}>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter>
                <Button variant="link">
                    {buttonText} <ArrowUpRight />
                </Button>
            </CardFooter>
        </Link>
    </Card>
);

export default ActionCard