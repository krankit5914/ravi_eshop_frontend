import React from "react";
import "../../styles/CategoryForm.css";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <div className="category-form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="categoryInput" className="form-label">
            Enter New Category
          </label>
          <input
            type="text"
            className="form-control"
            id="categoryInput"
            placeholder="E.g., Electronics, Fashion, Books"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
