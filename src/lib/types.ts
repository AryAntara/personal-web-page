import type { Icon, IconType } from "svelte-icons-pack";

export type Education = {
    institution: string;
    description: string;
    years: string[];
    location: string;
    logoUrl: string;
    mapLink: string;
};

export type WorkOfExperience = {
    institution: string;
    descriptions: string[];
    years: string[];
    location: string;
    logoUrl: string;
    mapLink: string;
};

export type Menu = { path: string; name: string };

export type Contact = {
    name: string,
    link: string,
    icon: IconType,
}

export type Technology = {
    name: string,
    icon: IconType,
    color?: string,
    bgColor?: string
}

export type Project = {
    name: string,
    color?: string,
    technologies: Technology[],
    description: string,
    isPrivate: boolean, 
    sourceLink?: string
}