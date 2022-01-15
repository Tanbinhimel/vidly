import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div class="form-group">
      <label for={name}>{label}</label>
      <select class="form-control" name={name} id={name} {...rest}>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
