import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: {
    school,
    college,
    ug,
    fieldofstudy,
    current,
    to,
    from,
    description,
  },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>College:</strong> {college}
      </p>

      <p>
        <strong>Degree:</strong> {ug}
      </p>
      <p>
        <strong>Field Of Study:</strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileEducation;
