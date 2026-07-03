import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


export type SkillCardProps = {
    title: string;
    category: string;
    description: string;
}
export const SkillCard = ({ title, category, description }: SkillCardProps) => {
    return(
        <Card className="transition hover:-translate-y-1 hover:shadow-sm">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{category}</CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}