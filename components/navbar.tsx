import Container from "@/components/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full py-3 bg-background flex items-center justify-center text-foreground border-b">
            <Container>
                <div className="w-full flex items-center justify-between gap-3">
                    <Link href="/">
                        <h1 className="text-lg font-bold">iNote</h1>
                    </Link>
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        <Link href="/add-note">
                            <li>Add Note</li>
                        </Link>
                        <Link href="/signup">
                            <li className="ml-6">
                                <Button size="sm" >Sign Up</Button>
                            </li>
                        </Link>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;