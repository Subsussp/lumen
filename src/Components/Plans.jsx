import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Tbreveal from "../Utills/Tbreveal";

const Plans = () => {
	function navto(url){

	}
	return (
		<div className="w-full bg-[#01031a] bg-gradient-to-b from-[#01031a]/100 to-[#01031a]/80">
			<div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
				<div className="mb-12 space-y-3">
					<h2 className="text-center text-zinc-100 text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
						Pricing
					</h2>
					<p className="text-center text-base text-zinc-500 md:text-lg">
						Where mentorship meets momentum.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					<Tbreveal delay={.2}>
					<div
						className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-100/90 to-zinc-200/80 p-6"
						style={{ 'filter': "blur(0px)" }}
					>
						<div className="flex flex-col items-center border-b border-zinc-700 pb-6">
							<span className="mb-6 inline-block font-bold text-black">Starter Package</span>
							<span className="mb-3 inline-block text-4xl font-medium ">
								$300
							</span>
							<span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
                                Perfect for beginners .
							</span>
						</div>
						<div className="space-y-4 py-9">
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
								<IoMdCheckmark />
								</span>
								<span className="text-sm font-Second text-zinc-600">Full business blueprint (how to get started from scratch)</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
								<IoMdCheckmark />
								</span>
								<span className="text-sm font-Second text-zinc-600">1-on-1 mentorship for 1 month</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
									<IoMdCheckmark />

								</span>
								<span className="text-sm font-Second text-zinc-600">
									Access to the product vault
								</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
									<IoMdCheckmark />

								</span>
								<span className="text-sm font-Second text-zinc-600"> Shopify store setup assistance</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
									<IoMdCheckmark />

								</span>
								<span className="text-sm font-Second text-zinc-600">Strategy for launching ads</span>
							</div>
						</div>
						<button className="rounded-md mt-10 nos px-4 py-2 text-lg transition-all hover:scale-[1.02] bg-zinc-50 text-zinc-900 active:scale-[0.98] w-full">
							Get started
						</button>
					</div>
					</Tbreveal>
					<Tbreveal delay={.4}>
					<div
						className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-100/50 to-zinc-700/60 p-6"
						style={{ 'filter': "blur(0px)" }}
					>
						<div className="flex flex-col  items-center border-b border-zinc-700 pb-6">
							<span className="mb-6 inline-block text-white">Growth Package</span>
							<span className="mb-3 inline-block text-4xl font-medium ">
								$500
							</span>
							<span className="bg-gradient-to-br text-[15px] from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
                                Tailored for stores poised for growth.							</span>
						</div>
						<div className="space-y-4 py-9">
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
									<IoMdCheckmark />
								</span>
								<span className="text-sm text-zinc-300">Everything in the Starter Package </span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
									<IoMdCheckmark />
								</span>
								
								<span className="text-sm text-zinc-300"> 3 months of mentorship
</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
									<IoMdCheckmark />
								</span>
								
								<span className="text-sm text-zinc-300">
									 Scaling strategies once you hit $300/day
								</span>
							</div>
							<div className="flex items-center gap-3">
								
									<span className="grid size-5 place-content-center text-sm text-zinc-800">
									<IoMdCheckmark />
								</span>
								<span className="text-sm text-zinc-300">Personalized ad copy and creatives for your product</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-800">
								<IoMdCheckmark />
								</span>
								<span className="text-sm text-zinc-300">Lifetime access to private product vault</span>
							</div>

						</div>
						<button className="rounded-md nos px-4 py-2 text-lg transition-all hover:scale-[1.02] active:scale-[0.98] w-full bg-zinc-200 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
							Subscribe
						</button>
					</div>
					</Tbreveal>
						<Tbreveal delay={.6}>
					<div
						className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-100/10 to-zinc-900/80 p-6"
						style={{ 'filter': "blur(0px)" }}
					>
						<div className="flex flex-col items-center border-b border-zinc-700 pb-6">
							<span className="mb-6 inline-block text-zinc-50">Pro Package</span>
							<span className="mb-3 inline-block text-4xl font-medium ">
								$800
							</span>
							<span className="bg-gradient-to-br from-zinc-200 text-[12px] to-zinc-500 bg-clip-text text-center text-transparent">
								Built for advanced growth and optimization
							</span>
						</div>
						<div className="space-y-4 py-8">
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-400">
									<IoMdCheckmark />
								</span>
								<span className="text-sm text-zinc-300">
									Everything in the Growth Package 
								</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-400">
									<IoMdCheckmark />
								</span>
								<span className="text-sm text-zinc-300">6 months of direct 1-on-1 support</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-400">
									<IoMdCheckmark />
								</span>
								<span className="text-sm text-zinc-300">
									 Advanced scaling strategies to hit $1K/day
								</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="grid size-5 place-content-center text-sm text-zinc-400">
									<IoMdCheckmark />
								</span>

								<span className="text-sm text-zinc-300">Complete access to private supplier network (fast-shipping, custom packaging)</span>
							</div>
							<div className="flex items-center gap-3">
                            <span className="grid size-5 place-content-center text-sm text-zinc-400">
									<IoMdCheckmark />
							</span>
								
								<span className="text-sm text-zinc-300"> In-depth analysis and optimization of store and ads every month</span>
							</div>
						</div>
						<button onClick={()=>  window.open('https://api.whatsapp.com/send?phone=639615852656&text=Hi%20MentorFlowX%2C%20I%20am%20looking%20to%20enroll%20in%20the%20mentorship%20program%20(Pro%20Package).', '_blank')} className="rounded-md nos -mt-10 px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] bg-zinc-800 hover:text-zinc-50 active:scale-[0.98] w-full">
							Contact us
						</button>
					</div>
						</Tbreveal>

				</div>
			</div>
		</div>
	);
};

export default Plans;
