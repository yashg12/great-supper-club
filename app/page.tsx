import { Container } from "@/components/container";
import { LinkButton } from "@/components/ui/button";
import { LoginPanel } from "@/components/login-panel";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-slate-950">
      <main className="flex flex-1 items-center justify-center relative overflow-hidden pb-20">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-[5rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[10rem]">
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <Container className="relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10">
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold tracking-tight text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text sm:text-7xl mb-6">
                Discover Unique <br />
                <span className="text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text">Dining Experiences</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0">
                Join minimal, curated dinners hosted by passionate creators. Book your seat at the table and connect over extraordinary food.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-x-6">
                <div className="hidden lg:block text-sm font-semibold leading-6 text-slate-400">
                  Trusted by 10,000+ top foodies
                </div>
              </div>
            </div>

            {/* Login Panel */}
            <div className="flex justify-center lg:justify-end">
              <LoginPanel />
            </div>
          </div>
        </Container>

        {/* Bottom Background Gradient */}
        <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-400 to-purple-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </main>
    </div>
  );
}
