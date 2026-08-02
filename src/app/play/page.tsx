import { MainLayout } from "@/src/layouts/main/main-layout"
import { TypeScriptPlayground } from "@/src/components/typescript-playground/typescript-playground"

export default function Play(){
    return(
        <MainLayout>
            <TypeScriptPlayground />
        </MainLayout>
    )   
}