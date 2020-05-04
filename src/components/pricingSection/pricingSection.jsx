import React from 'react';

import Pricing from '../pricingTab/pricingTab';
import { PricingSectionDiv } from './pricingSection.styles';

const PricingSection = () => (
  <PricingSectionDiv>
    <Pricing name="Freelance" amount="$5" marked="5GB file storage" line1="File Manager" line2="Upgrade at any time" />
    <Pricing
      large
      name="Teams"
      amount="$20"
      marked="20GB"
      line1="Collaboration Mode"
      line2="Up to 10 users"
      line3="Trello Integration"
    />
    <Pricing
      name="Enterprise"
      amount="$80"
      marked="Unlimited"
      line1="File Storage"
      line2="Admin Dashboard"
      line3="Unlimted Users"
      line4="All features"
    />
  </PricingSectionDiv>
);

export default PricingSection;
