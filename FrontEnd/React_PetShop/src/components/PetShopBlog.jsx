import React from 'react';
import img1 from '../images/gallery-img3.jpg'; // Import your image

const PetShopBlog = () => {
  const blogContainerStyle = {
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const petImageStyle = {
    flex: 1,
    borderRadius: '10px',
  };

  const petImageImgStyle = {
    maxWidth: '100%',
    borderRadius: '10px',
  };

  const blogContentStyle = {
    flex: 2,
    padding: '20px',
  };

  const h2Style = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const pStyle = {
    fontSize: '16px',
    lineHeight: 1.6,
    marginBottom: '15px',
  };

  const signatureStyle = {
    fontStyle: 'italic',
    color: '#888',
  };

  return (
    <div style={blogContainerStyle}>
      <div style={petImageStyle}>
        <img src={img1} alt="Pet" style={petImageImgStyle} />
      </div>
      <div style={blogContentStyle}>
        <h2 style={h2Style}>Why Pets Make Our Lives Better</h2>
        <p style={pStyle}>
          Having a furry friend by your side can bring immense joy and comfort. Their
          playful antics and unwavering loyalty create a bond that is hard to
          replicate. Whether it's a dog's excited tail wag or a cat's soothing purr,
          pets have a unique way of brightening even the darkest of days.
        </p>
        <p style={pStyle}>
          Studies have shown that spending time with pets can reduce stress and
          anxiety. The companionship they offer can help alleviate feelings of
          loneliness and depression. Moreover, taking care of a pet teaches
          responsibility and routine, which can be beneficial to people of all ages.
        </p>
        <p style={pStyle}>
          If you're considering bringing a pet into your life, make sure to choose one
          that suits your lifestyle. Whether you opt for a playful pup or a cuddly
          kitten, the love and warmth they bring will undoubtedly enhance your life.
        </p>
        <p style={signatureStyle}>- The Pet Lovers Team</p>
      </div>
    </div>
  );
};

export default PetShopBlog;
