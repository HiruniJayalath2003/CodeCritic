import { Code2 } from "lucide-react"
import { Button } from "../ui/button"
import submissions from "../Data/submissions"

export default function LoggedOut() {
    return (
        <div>
            <div className="flex items-center justify-between p-4 w-full bg-blue-50 rounded-sm sticky">
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
            <div>
                {submissions.map((sub)=>(
                    <div key={sub.id} className="border p-4 rounded-sm mt-2">
                        <h2 className="text-[18px] text-gray-700">{sub.name}</h2>
                        <h1 className="text-[20px]">{sub.title}</h1>
                        <p className="text-gray-600">{sub.description}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}