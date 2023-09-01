import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const routeConfig = {
  "/": ["Header", "HomePage", "Footer"],
  "/about": ["Header", "AboutPage", "Footer"],
  "/contact": ["Header", "ContactPage", "Footer"]
};

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {Object.entries(routeConfig).map(([path, components]) => (
          <Route key={path} path={path} element={getComponentElements(components)} />
        ))}
      </Routes>
    </Router>
  );
};

const getComponentElements = (componentNames) => {
  return (
    <React.Fragment>
      {componentNames.map((componentName, index) => {
        const Component = componentsMap[componentName];
        return <Component key={index} />;
      })}
    </React.Fragment>
  );
};

const Header = () => <div>Header Content</div>;
const HomePage = () => <div>HomePage Content</div>;
const AboutPage = () => <div>AboutPage Content</div>;
const ContactPage = () => <div>ContactPage Content</div>;
const Footer = () => <div>Footer Content</div>;

const componentsMap = {
  Header,
  HomePage,
  AboutPage,
  ContactPage,
  Footer
};
