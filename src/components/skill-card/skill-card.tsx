type SkillCardProps = {
    title: string;
    description: string;
}

export const SkillCard = ({ title, description}: SkillCardProps) => {
    return(
        <div className="p-6 border border-neutral-200 rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
        </div> 
    )
}