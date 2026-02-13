export default function Register() {
  return (
    <>
      <h2>Register</h2>
      <form>
        <label>
          <p>Email</p>
          <input type="text" name="email" />
        </label>
        <label>
          <p>Name</p>
          <input type="text" name="name" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password" name="confirmPassword" />
        </label>
        <label>
          <p>Avatar</p>
          <input type="url" name="avatar" />
        </label>
        <p>
          <button>Register</button>
        </p>
      </form>
    </>
  );
}
