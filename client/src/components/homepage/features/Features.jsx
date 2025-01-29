import React from 'react';
import Text from '../../../units/Text';
import FeaturesData from '../../../constants/mock/Features';

const Features = () => {
    return (
        <div className='flex flex-wrap border bg-[#FEEDF7] items-center justify-center gap-4 p-4 md:p-6 rounded-2xl mx-auto w-full max-w-screen-lg z-10 -translate-y-16'>
            {FeaturesData.features.map((feature, id) => (
                   <div 
                   key={id} 
                   className={`flex gap-2 py-2 px-4 cursor-pointer border-black ${
                       // Add right border to all except last item
                       id != 0 ? 'border-l-2 border-slate-400' : ''
                   }`}
               >
                    
                    {/* logo */}
                    <div>
                        <img
                            src={feature.logo}
                            alt={feature?.title || 'Feature icon'}
                            className="w-12 h-12 pointer-events-none select-none"
                            loading="lazy"
                        />
                    </div>
                    {/* desc */}
                    <div className='select-none'>
                        <Text usage="default" size="body-md-mid"
                            style={{ color: 'black' }}
                        >{feature.title}</Text>
                        <Text usage="default" size="body-sm-default" style={{ color: '#757F95' }}>{feature.description}</Text>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Features;
