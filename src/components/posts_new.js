import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          { ...field.input }
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'postsNewForm'
})(PostsNew);
