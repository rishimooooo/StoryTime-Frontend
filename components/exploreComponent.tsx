"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardHorizontal } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";

const stories = [
    {
        id: 1,
        title: "The Dragon Story",
        genre: "Fantasy",
        wordCount: 123000,
        chapters: 3,
        author: "John Doe",
        coverImage: "/placeholder-story.jpg",
    },
    {
        id: 2,
        title: "The Lost Kingdom",
        genre: "Adventure",
        wordCount: 98000,
        chapters: 5,
        author: "Jane Smith",
        coverImage: "/placeholder-story2.jpg",
    },
    {
        id: 3,
        title: "Cybernetic Dawn",
        genre: "Sci-Fi",
        wordCount: 150000,
        chapters: 7,
        author: "Mark Lee",
        coverImage: "/placeholder-story3.jpg",
    },
];

const authors = [
    {
        id: 1,
        name: "John Doe",
        bio: "Fantasy writer and world-builder, creating epic tales.",
        profileImage: "/placeholder-author.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        bio: "Adventure enthusiast, weaving thrilling narratives.",
        profileImage: "/placeholder-author2.jpg",
    },
    {
        id: 3,
        name: "Mark Lee",
        bio: "Sci-fi expert, crafting futuristic and cyberpunk worlds.",
        profileImage: "/placeholder-author3.jpg",
    },
];

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState<"stories" | "authors">("stories");
    const router = useRouter();



    return (
        <main className="min-h-screen px-6 py-4">

            <nav className="flex items-center justify-between pb-4">
                <div className="flex">
                    <h1 className="text-2xl font-bold mr-5">Explore •</h1>
                    <ToggleGroup
                        type="single"
                        value={activeTab}
                        onValueChange={(value) => setActiveTab(value as "stories" | "authors")}
                    >
                        <ToggleGroupItem value="stories">Stories</ToggleGroupItem>
                        <ToggleGroupItem value="authors">Authors</ToggleGroupItem>
                    </ToggleGroup>
                </div>

                <div className="flex items-center gap-2">
                    <Input placeholder="Search" className="w-64" />
                    <Button variant="outline" size="icon">
                        <Filter size={20} />
                    </Button>
                </div>
            </nav>

            <section className="mt-6">
                {activeTab === "stories" ? <StoriesList /> : <AuthorsList />}
            </section>
        </main>
    );
}

function StoriesList() {
    const router = useRouter();
    const handleNavBook = () => {
        router.push("/book");
    }
    return (
        <div className="grid gap-6">
            {stories.map((story) => (
                <CardHorizontal key={story.id} className="p-6 flex items-center justify-between">
                    <div className="flex-1 pr-4">
                        <p className="text-m text-gray-500">{story.genre}</p>
                        <h2 className="text-xl font-semibold">{story.title}</h2>
                        <p className="text-m text-gray-500">
                            {story.wordCount.toLocaleString()} words - {story.chapters} Chapters
                        </p>
                        <p className="text-m text-gray-700">by {story.author}</p>
                        <Button onClick={handleNavBook} className="mt-2">Read Now</Button>
                    </div>

                    <div className="w-128 h-58 flex-shrink-0 bg-gray-300 rounded-lg overflow-hidden">
                        <img
                            src={story.coverImage}
                            alt={story.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardHorizontal>
            ))}
        </div>
    );
}



function AuthorsList() {
    const router = useRouter();
    const handleNavAuthor = () => {
        router.push("/author");
    }

    return (
        <div className="grid gap-6">
            {authors.map((author) => (
                <CardHorizontal key={author.id} className="p-4 flex items-center justify-between gap-4">
                    <div className="w-40 h-40 bg-gray-300 rounded-full overflow-hidden">
                        <img src={author.profileImage} alt={author.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold">{author.name}</h2>
                        <p className="text-m text-gray-500">{author.bio}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button size="lg" className="w-40">Follow</Button>
                        <Button onClick={handleNavAuthor} variant="outline" size="lg" className="w-40">
                            Search
                        </Button>
                    </div>
                </CardHorizontal>
            ))}
        </div>
    );
}
