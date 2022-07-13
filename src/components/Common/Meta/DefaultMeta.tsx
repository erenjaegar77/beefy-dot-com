import React, { memo } from 'react';
import { useStaticSiteMeta } from '../../../data/queries/site-meta';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import socialImage from '!url-loader?limit=false!../../../images/social.png';

type LocationMetaProps = {
  baseUrl: string;
};
// seperated as only this part needs to re-render on location change
const LocationMeta = memo<LocationMetaProps>(function LocationMeta({ baseUrl }) {
  const location = useLocation();
  const canonical = `${baseUrl}${location.pathname}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
});

export const DefaultMeta = memo(function DefaultMeta() {
  const { title, description, siteUrl: baseUrl, twitterUsername } = useStaticSiteMeta();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}${socialImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={twitterUsername} />
        <meta property="twitter:creator" content={twitterUsername} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${baseUrl}${socialImage}`} />
      </Helmet>
      <LocationMeta baseUrl={baseUrl} />
    </>
  );
});
