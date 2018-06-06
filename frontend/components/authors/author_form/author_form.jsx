import React from 'react';

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageFile: '',
      imageUrl: ''
    };

    this.updateFile = this.updateFile.bind(this);
    this.fileReaderLoaded = this.fileReaderLoaded .bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToAuthor = this.navigateToAuthor.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentWillUnmount() {
    this.clearErrors();
  }

  update(field) {
    return ((e) => {
        this.setState({ [field]: e.currentTarget.value });
    });
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => this.fileReaderLoaded(file, fileReader);
    if(file) fileReader.readAsDataURL(file);
  }

  fileReaderLoaded(file, fileReader) {
    this.setState({ imageFile: file, imageUrl: fileReader.result });
  }

  navigateToAuthor(authorId) {
    this.props.history.push(`/authors/${authorId}`);
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("author[name]", this.state.name);
    formData.append("author[image]", this.state.imageFile);

    // const author = Object.assign({}, this.state);
    this.props.processForm(formData).then((response) => {
      this.navigateToAuthor(response.author.id);
    });
  }

  renderError(type) {
    let errors = this.props.errors.authorErrors;
    let thisError = '';
    errors.forEach((error) => {
      if (error.includes(type)) {
        thisError = error;
      }
    });

    return(
      <span>{thisError}</span>
    );
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render() {
    let imageClass = this.state.imageUrl === '' ? 'hidden' : 'author-form-image';
    return (
      <div className="background">
        <div className="foreground">
          <div className="author-form-container">
            <h2>add an author</h2>
            <hr className="line2" />
            <form className="author-form-box">
              <label>Name:<br />
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="author-form-name"
                  placeholder="name" />
              </label>
              <span className="author-input-error">
                {this.renderError('Name')}
              </span>
              <br />
              <label>Author Image:<br />
                <input type="file"
                  onChange={this.updateFile}
                  className="author-form-image-input" />
              </label>
              <img
                className={imageClass}
                src={this.state.imageUrl} />
              <span className="author-input-error">
                {this.renderError('Image')}
              </span>
              <button className="author-submit"
                onClick={this.handleSubmit}
                type="submit" >
                {this.props.formType}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorForm;
