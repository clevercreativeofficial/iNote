import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const LoginPage = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-background">
            <div className="relative flex flex-col items-center gap-6">
                <Link className="absolute top-0 left-0" href="/">Back home</Link> 
                <h1 className="text-2xl font-bold mt-10">Login</h1>
                <div className="flex flex-col gap-4 w-80">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Button className="w-full mt-2">Login</Button>
                </div>
                <small>
                    Don't have an account? <a href="/signup" className="text-blue-500 underline">Login</a>
                </small>
            </div>
        </div>
    )
}

export default LoginPage