/**
 * FormInput
 *  FormInput responsible for take object and restObject as object and return FormInput object jsx format
 * @param {object} label, labelClassName, ...otherProps
 *  @returns {object}
 */

const FormInput = ({ label, labelClassName, ...otherProps }) => {
  return (
    <>
      <input {...otherProps} />
      {label && <label className={labelClassName}>{label}</label>}
    </>
  );
};

export default FormInput;
