import React from "react";
import { Link } from "react-router-dom";
import Like from "./like";
import Table from "./table";

class MoviesTable extends React.Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onLikeClicked={() => this.props.onLike(movie)}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) =>
        this.props.user && (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
