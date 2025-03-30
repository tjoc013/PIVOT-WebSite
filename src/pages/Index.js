import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="PIVOT @ VT WebSite"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">This is PIVOT!</Link>
          </h2>
          <p>
            Physics Infused Vision for Onward Thinking
          </p>
        </div>
      </header>
      <p>
        Already composed of members from over 9 majors, we are excited to start forging our path and
        sharing physics-driven solutions with everyone! We have a couple projects under way, so stay
        tuned for more in depth postings of our process. If you or anyone you know is interested in
        learning more or joining our movement please reach out, we would love to have you!
      </p>
    </article>
  </Main>
);

export default Index;
