

// eslint-disable-next-line react/prop-types
const ImageUpload = ({setImage}) => {

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader(); 

      reader.onloadend = () => {
        setImage(reader.result); 
      };

      reader.readAsDataURL(file);
    }
    setImage(file)
  };
  
  return (
    <div className='text-left'>
      <label htmlFor="image">Upload Image : </label>
      <input
      className='mt-1'
        type="file"
        accept="image/*" 
        onChange={handleImageUpload} 
      />
    </div>
  );
};

export default ImageUpload;
