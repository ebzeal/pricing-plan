import React from 'react';

import { TopBarDiv, TopBarLogo, TopBarLogin } from './topBar.styles';

const TopBar = () => (
  <TopBarDiv>
    <TopBarLogo>
      <img src="../../../src/assets/logo.png" alt="our logo" />
    </TopBarLogo>
    <TopBarLogin>
      <div>Login</div>
      <div>Get started Now</div>
    </TopBarLogin>
  </TopBarDiv>
);

export default TopBar;
