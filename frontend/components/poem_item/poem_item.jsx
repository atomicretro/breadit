import { Link } from 'react-router-dom';

const PoemItem = () => {
  debugger
  let title = this.props.title;
  let author = this.props.author;
  return (
    <li><Link to={`/poems/${this.value}`}> {title}, {author}</Link></li>
  );
};

export default PoemItem;
