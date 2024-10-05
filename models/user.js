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

  static async getById (userId) {
    try {
      const query = `
      SELECT *
      FROM users
      WHERE id = $1;
    `;
      const {
        rows: [foundUser],
      } = await User.pool.query(query, [userId]);

      return foundUser;
    } catch (err) {
      throw err;
    }
  }
  static async deleteById (userId) {
    try {
      const query = `
        DELETE FROM users
        WHERE id = $1
        RETURNING 1;
      `;

      const {
        rows: [foundUser],
      } = await User.pool.query(query, [userId]);

      return foundUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = User;
