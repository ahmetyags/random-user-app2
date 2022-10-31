const Button = ({ newUser, addUser, delAll }) => {
  return (
    <div>
      <button onClick={newUser} className="btn btn-warning">
        NEW USER
      </button>
      <button onClick={addUser} className="btn btn-warning ">
        ADD USER
      </button>
      <button onClick={delAll} className="btn btn-danger">
        CLEAR ALL
      </button>
    </div>
  );
};

export default Button;
