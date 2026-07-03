"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SkillCard } from "../skill-card/skill-card";

type SkillCategory = "All" | "Framework" | "Style" | "Tool" | "Language";
const categories: SkillCategory[] = ["All", "Framework", "Style", "Tool", "Language"];

type skill ={
    title: string;
    category: Exclude<SkillCategory, "All">;
    description: string;
}
const skills: skill[] = [
    {
        title: "Next.js",
        category: "Framework",
        description:
        "ページ作成、ルーティング、コンポーネント分割を練習しています。",
    },
    {
        title: "Tailwind CSS",
        category: "Style",
        description: "classNameを使って、余白、色、レイアウトを調整できます。",
    },
    {
        title: "GitHub",
        category: "Tool",
        description: "ブランチ、コミット、push、PR作成を練習しています。",
    },
    {
        title: "TypeScript",
        category: "Language",
        description: "型を使って、コードのミスに早く気づけるようにします。",
    }
];

export const SkillSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchText, setSearchText] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);
    
    const filteredSkills = useMemo(() => {
        const normalizedSearchText = searchText.trim().toLowerCase();
    
        return skills.filter((skill) => {
            const matchesCategory = 
                selectedCategory === "All" || skill.category === selectedCategory;
            const matchesSearchText = 
                normalizedSearchText.length === 0 || 
                skill.title.toLowerCase().includes(normalizedSearchText) ||
                skill.description.toLowerCase().includes(normalizedSearchText);
    
            return matchesCategory && matchesSearchText;
        });
    }, [searchText, selectedCategory]);

    const handleResetFilter = useCallback(() => {
        setSelectedCategory("All");
        setSearchText("");
        searchInputRef.current?.focus();
    }, []);

    useEffect(() => {
        const previousTitle = document.title;

        document.title = `Skills: ${filteredSkills.length}件 | Portfolio`;

        return () => {
            document.title = previousTitle;
        };
    }, [filteredSkills.length]);

    return (
        <section id='skills'>
            <h2 className="text-xl font-bold text-neutral-900">Skills</h2>
            <div className="mt-3 p-6 max-w-xl mx-auto flex flex-col gap-2 border border-neutral-200 rounded-xl shadow-sm md:items-center md:justify-between">
                <div className="flex flex-col gap-4 md:items-center">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const isSelected = selectedCategory === category;
                            return (
                                <Button
                                    key={category}
                                    variant={isSelected ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </Button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-column gap-3 md:items-center">

                    <Input
                        className="mr-6 w-50 grow outline-neutral-700 sm:mr-0"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                        placeholder="検索"
                        ref={searchInputRef}
                    />
                    <Button
                        className="w-20"
                        variant="default"
                        onClick={handleResetFilter}
                    >
                        Reset
                    </Button>
                </div>
            </div>
            <div className="grid gap-8 mt-6 md:grid-cols-3">
                {filteredSkills.map((skill) =>(
                <SkillCard
                    key={skill.title}
                    title={skill.title}
                    category={skill.category}
                    description={skill.description}
                />
                ))}
            </div>
            {filteredSkills.length === 0 && (
                <p className="mt-6 p-3 rounded-xl text-center text-sm text-neutral-600 md:mx-auto">
                    条件に合うスキルがありません。
                </p>
            )}
        </section>
    )

}