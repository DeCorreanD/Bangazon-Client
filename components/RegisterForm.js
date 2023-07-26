/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { FaUserCheck } from 'react-icons/fa';
import { registerUser } from '../utils/auth';
import { updateUserProfile } from '../utils/data/userData'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    bio: '',
    name: '',
    image: '',
    isseller: false,
    uid: '',
  });

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: user.id,
        name: user.name || '',
        image: user.image || '',
        bio: user.bio || '',
        uid: user.uid || '',
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.id) {
      updateUserProfile(formData)
        .then(() => updateUser(user.uid))
        .then(() => router.push('/profile'));
    } else {
      registerUser(formData).then(() => router.push('/'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Profile</Form.Label>

        {/* Bio Input */}
        <Form.Control as="textarea" name="bio" required placeholder="Enter your Bio" value={formData.bio} onChange={handleInputChange} />
        <Form.Text className="text-muted">Let other users know a little bit about you...</Form.Text>
        {/* Name Input */}
        <Form.Control as="textarea" name="name" required placeholder="Enter your Name" value={formData.name} onChange={handleInputChange} />
        <Form.Text className="text-muted">Let other users know your name...</Form.Text>
        {/* Image Input */}
        <Form.Control as="textarea" type="url" name="image" required placeholder="Enter Image Url" value={formData.image} onChange={handleInputChange} />
        <Form.Text className="text-muted">Let other users see you...</Form.Text>

        {/* A WAY TO HANDLE UPDATES FOR TOGGLES, RADIOS, ETC  */}
        <Form.Check
          className="text-black mb-3"
          type="switch"
          id="isseller"
          name="isseller"
          label="Seller"
          checked={formData.isseller}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              isseller: e.target.checked,
            }));
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        <FaUserCheck />
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string,
  }),
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
