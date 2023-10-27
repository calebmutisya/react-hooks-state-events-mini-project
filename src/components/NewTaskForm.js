import React,{useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit, filteredCategory}) {
  const [formData, setFormData]=useState({
    text:"",
    category: categories[0],
  })

  const handleInputChange=(event)=>{
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(formData);
    // Reset the form after submission
    setFormData({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"  value={formData.text} onChange={handleInputChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInputChange}>
          {categories.filter((category)=> category !== "All")
          .map((category, index)=>(
            <option key={index} value={category}>
              {category}
            </option>
          ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
