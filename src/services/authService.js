export const register = async (request) => {
  const { fullname, username, email, role, address, phone_number, age } =
    request;

  const [users] = await pool.query(
    "INSERT INTO users (fullname, username, email, password, role,address,phone_number,age) VALUES (?, ?, ?, ?, ?)",
    [fullname, username, email, password, role, address, phone_number, age]
  );

  const newUser = {
    id: users.insertId,
    fullname,
    username,
    email,
    role,
  };

  return newUser;
};
