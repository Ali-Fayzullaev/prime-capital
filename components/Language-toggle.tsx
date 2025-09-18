"use client"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"


export default function LanguageToggle(){
const { lang, setLang } = useI18n()
const next = lang === "ru" ? "kz" : "ru"
return (
<Button variant="ghost" onClick={()=>setLang(next)} aria-label="Switch language">
{lang.toUpperCase()} → {next.toUpperCase()}
</Button>
)
}