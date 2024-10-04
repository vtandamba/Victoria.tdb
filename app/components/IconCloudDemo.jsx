import IconCloud from "./../../components/ui/icon-cloud";

const slugs = [
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "jest",
    "docker",
    "git",
    "github",
    "gitlab",
    "sass",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "typescript",
];



// "dart",
// "flutter",
// "android",
// "nodedotjs",
// "express",
// "nextdotjs",
// "prisma",
// "nginx",
// "testinglibrary",
// "cypress",
// "jira",
// "sonarqube",

export function IconCloudDemo() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
