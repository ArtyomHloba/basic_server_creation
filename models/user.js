class User {
  static async create ({ firstName, lastName, email, tel }) {
    try {
      const {
        rows: [createdUser],
      } = await User.pool.query(
        `
          INSERT INTO users (first_name, last_name, email, tel)
          VALUES ($1, $2, $3, $4)
          RETURNING *; 
        `,
        [firstName, lastName, email, tel]
      );

      return createdUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = User;
