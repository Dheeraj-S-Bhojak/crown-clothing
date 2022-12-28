const FormInput = ({ label, labelClassName, ...otherProps }) => {
  return (
    <>
      <input {...otherProps} />
      {label && <label className={labelClassName}>{label}</label>}
    </> 
  );
};

export default FormInput;
