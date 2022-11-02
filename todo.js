function Todo ({todo, index, remove}) {

    const handle = e => {
        remove(index);
    }

    return (
        <div className="todo" onClick={handle}>{todo.text} (-)</div>
    );
}