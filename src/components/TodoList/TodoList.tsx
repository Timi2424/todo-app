import { useContext } from 'react';
import { TodoItem } from '../TodoItem';
import { Todo } from '../../types/Todo';
import { AppContext } from '../../ContextProvider/AppContext';
import React from 'react';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = React.memo((props) => {
  const { todos } = props;
  const { tempTodo } = useContext(AppContext);

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {tempTodo && (
        <TodoItem key={tempTodo?.id} todo={tempTodo} />
      )}
    </section>
  );
});
