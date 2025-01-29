import React from 'react';
import Text from '../../units/Text';
import FeaturesData from '../../constants/mock/Features';

const Features = () => {
    return (
        <div>
            {FeaturesData.features.map((feature, id) => (
                <div key={id}>
                    {/* logo */}
                    <div>
                        <img src={feature.logo} alt={feature.title || 'Feature logo'} />
                    </div>
                    {/* desc */}
                    <div>
                        <Text usage="default" size="body-md-mid">{feature.title}</Text>
                        <Text usage="default" size="body-sm-default">{feature.description}</Text>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;
