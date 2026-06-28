import { Hospital, MapPin, Phone, Search } from 'lucide-react'

const TopBar = () => {
    return (
        <div className="bg-primary text-white">
            <div className="mx-auto container h-12 px-6 flex items-center justify-between">

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 text-sm">
                        <Hospital size={15} />
                        <div className="overflow-hidden whitespace-nowrap">
                            <p className="inline-block animate-marquee">
                                Welcome to Sonia Nursing Home.
                            </p>
                        </div>
                    </div>
                    <div className="hidden xl:flex items-center gap-2 text-sm">
                        <MapPin size={15} />
                        <span>New Bustand, Tangail, Bangladesh</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2 text-sm">
                        <Phone size={15} />
                        <span>09606316505</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center justify-end">
                    <div className="relative">
                        <Search
                            size={16}
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                        />
                        <input
                            placeholder="Search"
                            className="w-64 rounded-full bg-white/10 pl-11 pr-5 h-9 outline-none border border-white/20 placeholder:text-white/70"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar