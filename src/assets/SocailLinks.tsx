import { Facebook, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { ReactNode } from "react";

type socialLink = {
    id: number;
    name: string;
    icon: ReactNode,
    href: string
}
export const socialLinks: socialLink[] = [
    { id: 1, name: 'Mail', icon: <Mail size={24} />, href: 'mailto:aymansedkey10@gmail.com' },
    { id: 2, name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/aymansedkey10' },
    { id: 3, name: 'GitHub', icon: <Github size={24} />, href: 'https://github.com/Aaymansedkey10' },
    { id: 4, name: 'WhatsApp', icon: <MessageCircle size={24} />, href: 'https://wa.me/201000607106' },
    { id: 5, name: 'Facebook', icon: <Facebook size={24} />, href: 'https://facebook.com/aymansedkey10' },
]
