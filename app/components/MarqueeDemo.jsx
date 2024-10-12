import { cn } from "./../../lib/utils";
import Marquee from "./../../components/ui/marquee";
import api from './../assets/icons/api-icon.svg';
import cloudflare from './../assets/icons/cloudflare-icon.svg';
import code from './../assets/icons/code-icon.svg';
import data from './../assets/icons/data-icon.svg';
import devops from './../assets/icons/devops-icon.svg';
import django from './../assets/icons/django-icon.svg';
import docker from './../assets/icons/docker-icon.svg';
import edgeSeo from './../assets/icons/edge-seo-icon.svg';
import git from './../assets/icons/git-icon.svg';
import java from './../assets/icons/java-icon.svg';
import mysql from './../assets/icons/mysql-icon(1).svg';
import notion from './../assets/icons/notion-icon.svg';
import php from './../assets/icons/php-icon.svg';
import postgres from './../assets/icons/postgres-icon.svg';
import py from './../assets/icons/py-icon.svg';
import server from './../assets/icons/server-icon.svg';
import sf from './../assets/icons/sf-icon(3).svg';
import supabase from './../assets/icons/supabase-icon(2).svg';
import trello from './../assets/icons/trello-icon.svg';
import vuejs from './../assets/icons/vuejs-icon.svg';
import Image from "next/image";

const reviews = [
  {
    name: "VueJS",
    img: vuejs,  // Passer l'image directement
  },
  {
    name: "API",
    img: api,  // Passer l'image directement
  },
  {
    name: "Docker",
    img: docker,  // Passer l'image directement
  },
  {
    name: "GitHub",
    img: git,  // Passer l'image directement
  },
  {
    name: "Cloudflare",
    img: cloudflare,  // Passer l'image directement
  },
  {
    name: "Supabase",
    img: supabase,  // Passer l'image directement
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Image className="rounded-full" width={35} height="32" alt={name} src={img} />
        <blockquote className="mt-2 text-sm">{name}</blockquote>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
