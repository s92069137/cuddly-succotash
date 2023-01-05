import React from "react";

const TodoList = ({todos , handleDelete , handleEdit }) =>{
    return (
        <ul className="mytodos">
            {todos.map((t) => (
                <li className="toMdo">
                    < span className="tdtext" key={t.id}>
                        {t.todo}
                    </span>
                    <button onDoubleClick={() => handleEdit (t.id) }> Edit </button>
                    <button onDoubleClick={() => handleDelete (t.id) }> Delete </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;