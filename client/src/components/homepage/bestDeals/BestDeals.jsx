import star from "../../../assets/star1.png"
import DiscountedItems from "./DiscountedItems"

const BestDeals = () => {
    return (
        <div>

            <div className="bg-[#A83EBC] relative flex items-center py-12 justify-start h-[40vh] flex-col">
                <div className="flex flex-col justify-center items-center text-white gap-2">
                    {/* title */}
                    <h2 className="capitalize font-bold text-2xl font-Montserrat tracking-wide">Best Deals for this week</h2>
                    <div className="font-thin">Dive into our exclusive deals and make every gift count. Shop now and save big on the perfect surprises!</div>
                    <div className="font-bold flex items-center gap-2"><span className="text-[#f41e1eef] text-lg">10% Off </span> In Every Gift Kits</div>
                </div>

                {/* left overlay bg */}
                <div className="absolute -top-12 left-0">
                    <img src={star} alt="starbg" />
                </div>

            </div>
            <DiscountedItems />
        </div>
    )
}

export default BestDeals