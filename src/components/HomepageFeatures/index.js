import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    link: '/docs/API',
    description: (
      <>
        Check out the languages we support and learn how we handle authentication.
      </>
    ),
  },
  {
    title: 'Chatbot APIs',
    link: '/docs/Chatbot APIs',
    description: (
      <>
        Explore the APIs behind our chatbots.
      </>
    ),
  },
  {
    title: 'Translation API',
    link: '/docs/Translation API',
    description: (
      <>
        Discover how we translate conversations with our API.
      </>
    ),
  },
  {
    title: 'Text-to-Speech API',
    link: '/docs/Text-to-Speech API',
    description: (
      <>
        Find out about the API that gives voice to our technology.
      </>
    ),
  },
  {
    title: 'Speech-to-Text API',
    link: '/docs/Speech-to-Text API',
    description: (
      <>
        Learn how our API turns spoken words into written text.
      </>
    ),
  },
  {
    title: 'Vela APIs',
    link: '/docs/Vela APIs',
    description: 'Learn how to upload call recordings.',
  },
  
];

function Feature({ title, link, description }) {
  return (
    <a href={link} rel="noopener noreferrer" className={clsx('col col--3', styles.border, styles.textv, styles.feature)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.hcolor}>{title}</Heading>
        <p className={styles.textcolor}>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <Heading as="h3" className={styles.textheading}>API Documentation</Heading>
      <p className={styles.text}>Botlhale AI's APIs follow REST principles. They feature resource-oriented URLs, accept form-encoded request bodies, return JSON responses, and use standard HTTP response codes and authentication. For more details, look at the cards below.</p>
      <section>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>
    </div>
  );
}
