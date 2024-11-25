import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'  // Import the CSS for Skeleton

const SkeletonDetails = () => {
    return (
        <div className="details-container w-full min-h-screen sm:h-screen flex flex-col sm:flex-row justify-between bg-[#FDF9EE] relative overflow-hidden">
            {/* Left Section (Image) */}
            <div className='w-full sm:w-[50%] h-[60vh] sm:h-full relative overflow-hidden sm:overflow-visible'>
                <div className='img-container w-full h-[240vh] sm:h-[400vh]'>
                    <Skeleton height="100%" width="100%" count={3} />
                </div>
                
                <div className='h-full sm:h-screen absolute top-10 pointer-events-none sm:top-0 right-30 px-3 sm:px-0  sm:right-[-2.5vw] flex flex-col items-center justify-center gap-8'>
                <Skeleton width="5vw" height="5vw"/>
                <Skeleton width="5vw" height="5vw"/>
                <Skeleton width="5vw" height="5vw"/>
                <Skeleton width="5vw" height="5vw"/>
                </div>
            </div>

            {/* Right Section (Product Details) */}
            <div className='w-full sm:w-[50%] sm:h-full flex flex-col items-start sm:items-center justify-center py-10 sm:py-0 sm:pt-14 px-3 sm:px-0'>
            {/* Skeleton for Product Info */}
            <Skeleton width={900} height={20} className='mb-2' />
            <Skeleton width={900} height={20} className='mb-2' />
            <Skeleton width={900} height={20} className='mb-2' />
            <Skeleton width={800} height={20} className='mb-2' />
            <Skeleton width={700} height={20} className='mb-2' />
            {/* Skeleton for Quantity Buttons Section */}
            <div className='detstxt flex items-center justify-between w-full sm:w-[45%] h-[6vh] mt-8 sm:mt-10'>
                <Skeleton width={120} height={40} />
                <Skeleton width={150} height={40} />
            </div>
        </div>
        </div>
    )
}

export default SkeletonDetails
