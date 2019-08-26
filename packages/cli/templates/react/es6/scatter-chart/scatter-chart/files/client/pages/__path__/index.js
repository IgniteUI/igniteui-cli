import React from 'react';
import Header from 'components/Header';
import $(ClassName) from 'components/$(path)';

export default () => (
  <article className="$(ClassName)">
    <Header title="$(name)" className="header-main" />
    <$(ClassName) />
  </article>
);