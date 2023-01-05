import React from "react";

     const TodoForm=({handleSubmit ,  todo, setTodo, addTodo}) => {
       return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <form><b>Per day to do list :)</b></form>
            <div className="input-container">
            <input type="text" name="todo" value={todo} placeholder="Create a new task" onChange={(e) => { setTodo (e.target.value) ;
            }}
            />
            <button className="add-btn" onClick={addTodo}>Add</button>
        </div>
        </form> 
    );
};

export default TodoForm;