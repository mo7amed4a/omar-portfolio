import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SalesLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Live indicator */}
      {/* <header className="flex justify-between items-center p-4 md:p-6">
        <p className="text-gray-600 text-sm md:text-base">
          Set this limit to develop yourself
        </p>
        <div className="flex items-center gap-2 text-red-600">
          <Circle className="w-3 h-3 fill-current animate-pulse" />
          <span className="font-semibold">LIVE EVENT</span>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex gap-x-4 container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full ">
          {/* Left Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Sales From A to Z
            </h1>
            <p className="text-gray-600">
              Recorded and continuous course
            </p>
            <div className="text-blue-600 font-medium">
              Jul-15-2022
            </div>
            <p className="text-gray-700 max-w-xl">
              For everyone who faces difficulty in getting information and sales... This program was specially designed to help you now with a 15-day course
            </p>
            <Button 
              size="lg" 
              className="bg-secondary text-white px-8 py-6 text-lg rounded-md"
            >
              Register Now
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-[400px] md:h-[500px] order-1 md:order-2">
            <div className="absolute inset-0 bg-black rounded-2xl overflow-hidden">
              <Image
                src="/slider/7-copy.webp"
                alt="Course Instructor with Book"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-secondary font-bold text-xl md:text-3xl border-b-2 border-secondary pb-1">
            Jul
          </div>
          <div className="text-3xl md:text-5xl font-bold mt-1 text-primary">
            15
          </div>
        </div>
      </main>

      {/* Date Display */}
    </div>
  )
}

