/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer splashBackground">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.splashTitle} />
          <PromoSection>
            <Button href={docUrl('introduction')}>GETTING STARTED</Button>
            <Button href={docUrl('examples')}>Examples</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
	
	const FeatureBlock = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
		  className="featureBlock"
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection"
        style={{textAlign: 'center'}}>
        <h2>Features</h2>
		<p>Procyon Framework is a powerful http framework written in Go. Develop your application with features offered in a short time.</p>
      </div>
    );

    const Features = () => (
		<div>
      <FeatureBlock layout="threeColumn">
        {[
		  {
            content: 'Develop your project by using Controller-Service-Repository Pattern',
            image: `${baseUrl}img/project-structure.png`,
            imageAlign: 'top',
            title: 'Project Structure',
          },
		  {
            content: 'Set your routing paths easily in Controller',
            image: `${baseUrl}img/route.png`,
            imageAlign: 'top',
            title: 'Routing',
          },
          {
            content: 'Manage your logs',
            image: `${baseUrl}img/log.png`,
            imageAlign: 'top',
            title: 'Logger',
          },
        ]}
      </FeatureBlock>
	  <FeatureBlock layout="threeColumn">
        {[
		  {
            content: 'Procyon allows us to configure the application without coding',
            image: `${baseUrl}img/configure.png`,
            imageAlign: 'top',
            title: 'Configurable',
          },
		  {
            content: 'It provides predictable performance unlike other frameworks',
            image: `${baseUrl}img/performance.png`,
            imageAlign: 'top',
            title: 'Fast',
          },
        ]}
      </FeatureBlock>
	  <FeatureBlock layout="threeColumn">
        {[
		  {
            content: 'Meet Peas which are managed by Procyon',
            image: `${baseUrl}img/component.png`,
            imageAlign: 'top',
            title: 'Dependency Injection',
          },
		  {
            content: 'Code your application based on events',
            image: `${baseUrl}img/event.png`,
            imageAlign: 'top',
            title: 'Events',
          },
		  {
            content: 'Transanctions are managed automatically, don\'t need to worry about it',
            image: `${baseUrl}img/database.png`,
            imageAlign: 'top',
            title: 'Transanction Management',
          },
        ]}
      </FeatureBlock>
	  	  <FeatureBlock layout="threeColumn">
        {[
		  {
            content: 'Centralize your application errors',
            image: `${baseUrl}img/error.png`,
            imageAlign: 'top',
            title: 'Error Handling',
          },
		  {
            content: 'Request and Parameter Binding',
            image: `${baseUrl}img/bind.png`,
            imageAlign: 'top',
            title: 'Binding',
          },
		  {
            content: 'Extending the application is easy',
            image: `${baseUrl}img/extend.png`,
            imageAlign: 'top',
            title: 'Extendable',
          },
        ]}
      </FeatureBlock>

	  </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer noPaddingTop">
          <FeatureCallout />
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
