import ModeToggleButton from "@/src/components/buttons/ModeToggleButton";
import { NavLinkType } from "@/src/types/nav";
import {
    Home,
    User,
    LayoutGrid,
    History,
    Cpu,
    Mail,
    FileUser
} from "lucide-react";

export const NavLinks: NavLinkType[] = [
    {
        "id": 1,
        "icon": <Home size={20} />,
        "href": "home",
        "label": "Home"
    },
    {
        "id": 2,
        "icon": <User size={20} />,
        "href": "about",
        "label": "About"
    },
    {
        "id": 3,
        "icon": <LayoutGrid size={20} />,
        "href": "works",
        "label": "Works"
    },
    {
        "id": 4,
        "icon": <History size={20} />,
        "href": "experience",
        "label": "Experience"
    },
    {
        "id": 5,
        "icon": <Cpu size={20} />,
        "href": "skills",
        "label": "Skills"
    },
    {
        "id": 6,
        "icon": <Mail size={20} />,
        "href": "contact",
        "label": "Contact"
    },
    {
        "id": 7,
        "icon": <FileUser size={20} />,
        "href": "https://drive.google.com/file/d/1UEnEKxzZ-GAbD4iE63-SJUcjeKMOsD9w/view?usp=sharing",
        "label": "Resume"
    },
    {
        "id": 8,
        "icon": <ModeToggleButton />,
        "href": "",
        "label": "mode"
    }
]