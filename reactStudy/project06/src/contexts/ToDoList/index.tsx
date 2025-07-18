import { createContext, ReactNode, useState } from "react";

interface Context {
    readonly toDoList: string[];
    readonly onAdd: (toDo: string) => void;
    readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
    toDoList: [],
    onAdd: (): void => {},
    onDelete: (): void => {}
});

interface Props {
    children: ReactNode;
}

const ToDoListContextProvider = ({children}: Props) => {
    const [toDoList, setToDoList] = useState(["1", "2"]);

    const onDelete = (toDo: string) => {
        setToDoList(toDoList.filter((item) => item !== toDo))
    }

    const onAdd = (toDo: string) => {
        setToDoList([...toDoList, toDo])
    }

    return (
        <ToDoListContext.Provider
            value={{
                toDoList,
                onAdd,
                onDelete
            }}
        >{children}
        </ToDoListContext.Provider>
    )
}

export {ToDoListContext, ToDoListContextProvider}