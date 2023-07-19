import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
    textAlign: 'center',
  },
};

const Projects = (props) => {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const renderProjectsByCategory = (categoryData) => {
    if (!categoryData) return null;

    return Object.entries(categoryData).map(([categoryName, projects]) => (
      <div key={categoryName} className="section-content-container">
        <Container style={styles.containerStyle}>
          <h2>{categoryName}</h2>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {projects.map((project) => (
              <Fade key={project.title}>
                <ProjectCard project={project} />
              </Fade>
            ))}
          </Row>
        </Container>
      </div>
    ));
  };

  return (
    <>
      <Header title={header} />
      {data ? (
        renderProjectsByCategory(data)
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
