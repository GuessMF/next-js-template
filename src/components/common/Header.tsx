
import { Chrome } from "lucide-react"
import { NavMenu } from "./NavMenu";

export default function Header() {
    return (
        // <header className="flex flex-row content-center">
        <header className="flex justify-center items-center py-2 px-4 bg-zinc-400">
            <Chrome className="mr-auto"/>
            <NavMenu />
        </header>
    );

}