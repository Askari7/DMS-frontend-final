import React from 'react'

import LandingHeader from './header';
import LandingHero from './hero';
import LandingCompanies from './companies';
import LandingFeatures from './features';
import LandingContent1 from './content-1';
import LandingContent2 from './content-2';
import LandingPeople from './people';
import LandingPricing from './pricing';
import LandingFooter from './footer';

export default function Landing() {
    return (
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
            <LandingHeader />

            <LandingHero />

            <LandingCompanies />

            <LandingFeatures />

            <LandingContent1 />

            <LandingContent2 />

            <LandingPeople />

            <LandingPricing />

            <LandingFooter />
        </div>
    )
}
