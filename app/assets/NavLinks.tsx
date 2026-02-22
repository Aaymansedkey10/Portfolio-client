import ModeToggleButton from "@/components/buttons/ModeToggleButton";
import { NavLinkType } from "@/types";
import {
    Home,
    User,
    LayoutGrid,
    History,
    Cpu,
    Mail,
    FileText,
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
        "href": "",
        "label": "Resume"
    },
    {
        "id": 8,
        "icon": <ModeToggleButton />,
        "href": "",
        "label": ""
    }
]