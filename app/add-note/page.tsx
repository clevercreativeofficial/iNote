import { Button } from "@/components/ui/button"
import Link from "next/link"

const AddNotePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Add Note Page - Coming Soon!</h1>
                <p className="mt-4 text-muted-foreground">This page is under construction.</p>
                <Link href="/">
                    <Button className="mt-6">Go Back Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default AddNotePage;