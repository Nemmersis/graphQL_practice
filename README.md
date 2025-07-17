# GraphQL Practice

This project is a simple Node.js application demonstrating the basics of GraphQL. It includes a sample schema, resolver setup, and a lightweight server for practicing GraphQL queries and mutations.

## Features

- Basic GraphQL schema definition
- Example queries and mutations
- Simple database integration (see `_db.js`)
- Easy to extend for learning purposes

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nemmersis/graphQL_practice.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Project

Start the server with:

```bash
node index.js
```

The GraphQL endpoint will be available at `http://localhost:4000/graphql` (or the port specified in your code).

## Project Structure

- `index.js` – Entry point and server setup
- `schema.js` – GraphQL schema and resolvers
- `_db.js` – Simple database logic
- `package.json` – Project metadata and dependencies
- `.gitignore` – Files and folders to ignore in git

## Example Query

``` graphql
query {
  query GamesQuery( $gameId: ID!) {
    game(id: $gameId) {
      title,
      reviews {
        rating,
        content
      }
    }
  }
}
```

## License

This project is for educational purposes.
