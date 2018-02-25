import React from 'react';
import Header from '../../header/components/Header';
import Footer from '../../footer/components/Footer';
import Editor from './containers/editor';

class WritePost extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        

        <div className="writepost-container">
            <div id="writepost-form">
              <form action="/posts/new" method="post">
              <span id="post-title"><label htmlFor="title">Title </label><input type="text" name="label" /></span>
              <br />
              <fieldset id="post-tags">
                <legend>Choose your tags</legend>
                <div id="tag-div">
                  <input type="checkbox" id="post-tags" name="tags" value="jerusalem" />
                  <label htmlFor="jerusalem">Jerusalem</label>
                  <input type="checkbox" id="post-tags" name="tags" value="modiin" />
                  <label htmlFor="modiin">Modiin</label>
                  <input type="checkbox" id="post-tags" name="tags" value="flight" />
                  <label htmlFor="flight">Flight</label>
                  <input type="checkbox" id="post-tags" name="tags" value="kids" />
                  <label htmlFor="kids">Kids</label>
                </div>
              </fieldset>
              <fieldset id="post-img-upload">
              <span id="post-img-upload"><label htmlFor="img-upload">Choose Image </label><input type="file" name="image" /></span>
              </fieldset>
              <br />
              <Editor />
              <div id="submit-btn"><input type="submit" /></div>
            </form>
            </div>
        </div>

        <Footer />
      </React.Fragment>
    )
  }

}
export default WritePost