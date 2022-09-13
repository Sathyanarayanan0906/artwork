import React from "react";
import "./NewProject.css";
export default function NewProjects() {
  return (
    <div className="head">
      <h1>Start a new project</h1>
      <h3 className="heading1">Instructions</h3> 
     
      <p className="heading2">Please follow instructions</p>
      <div className="box">
      <p>1.To Start your project workflow please fill in the fields within the request info tab.</p>
      <p>2.Select the required workflow template.</p>
      <p>3.Click on files tab to upload any files required by selecting the file type then click add files button to upload your files.</p>
      <p>4.Click on the stack holders tab to check if all the required activites and stackholders are</p>
      </div>
      <form className="form">
      <input type="text" name="name" placeholder="Approver"/> <input type="text" name="name" placeholder="06-Aug-2020" /> <input type="text" name="name" placeholder="Template Name"/><br/>
      <input type="text" name="name"placeholder="Category" /> <input type="text" name="name" placeholder="Brand"/> <input type="text" name="name" placeholder="Product Code"/><br/>
      <input type="text" name="name" placeholder="SKU" /> <input type="text" name="name" placeholder="Pack Size"/> <input type="text" name="name" placeholder="Due date"/><br/>
      <input type="text" name="name" placeholder="Reason for request"/><br/>

</form>
    </div>
    
  );
}