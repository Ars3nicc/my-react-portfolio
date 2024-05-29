import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ title, description, techStack, date }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>
        <Typography variant="body1" component="p" style={{ marginTop: '10px' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
