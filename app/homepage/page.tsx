"use client"

import { Button } from "@/components/ui/button"
import ExplorePage from "../../components/exploreComponent"
import { Navbar } from "@/components/Navbar"

export default function HomePage() {

    return (
        <main className="min-h-screen bg-white">
            <Navbar></Navbar>
            <div className="flex-col p-10 mt-5 ml-5 mr-5">
                <div className="flex items-center justify-between p-10">
                    <div className="flex-col">
                        <div className="text-9xl font-bold">
                            Welcome
                        </div>
                        <div className="text-xl font-bold p-4 ml-3">
                            would you like to start your story?
                        </div>
                    </div>
                    <Button className="text-xl">
                        Start a Book
                    </Button>
                </div>
                <div className="h-px bg-gray-300 w-full my-4" />
                <div className="text-black">
                    <ExplorePage></ExplorePage>
                </div>
            </div>

        </main>
    )
}