import { Code2 } from "lucide-react"
import { Button } from "../ui/button"

export default function LoggedOut() {
    return (
           <div className="flex items-center justify-between p-4 w-full bg-blue-50 sticky">
                <div className="flex gap-4">
                    <div className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm">
                        <Code2 className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">CodeCritic</h1>
                        <p className="font-bold text-gray-600">Share.Review.Grow</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <Button variant="outline">Login</Button>
                    <Button className="bg-blue-500">Sign Up</Button>
                </div>
            </div>

    )
}