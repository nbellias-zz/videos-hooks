import React, {useState} from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
    // console.log(term);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // call callback from parent component
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
  // state = { term: "" };

  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value });
  //   // console.log(this.state.term);
  // };

  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   // call callback from parent component
  //   this.props.onFormSubmit(this.state.term);
  // };

  // render() {
    // return (
    //   <div className="search-bar ui segment">
    //     <form onSubmit={this.onFormSubmit} className="ui form">
    //       <div className="field">
    //         <label>Video Search</label>
    //         <input
    //           type="text"
    //           value={this.state.term}
    //           onChange={this.onInputChange}
    //         />
    //       </div>
    //     </form>
    //   </div>
    // );
  // }
// }

export default SearchBar;
