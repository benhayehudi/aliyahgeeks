import React from 'react';
import Navbar from '../containers/Navbar';
import PostEditor from '../containers/editor';

class WritePost extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="writepost-container">
            <div id="writepost-form">
              <form action="/posts/new" method="post">
              <span id="post-title"><label htmlFor="title">Title </label><input type="text" name="post[title]" /></span>
              <br />
              <fieldset id="post-tags">
                <legend>Choose your tags</legend>
                <div id="tag-div">
                  <input type="checkbox" id="post-tags" name="post[tags]" value="jerusalem" />
                  <label htmlFor="jerusalem">Jerusalem</label>
                  <input type="checkbox" id="post-tags" name="post[tags]" value="modiin" />
                  <label htmlFor="modiin">Modiin</label>
                  <input type="checkbox" id="post-tags" name="post[tags]" value="flight" />
                  <label htmlFor="flight">Flight</label>
                  <input type="checkbox" id="post-tags" name="post[tags]" value="kids" />
                  <label htmlFor="kids">Kids</label>
                </div>
              </fieldset>
              <fieldset id="post-img-upload">
              <span id="post-img-upload"><label htmlFor="img-upload">Choose Image </label><input type="file" name="post[image]" /></span>
              </fieldset>
              <br />
              <fieldset id="publish-choice">
                <legend>Ready to publish?</legend>
                <div id="tag-div">
                  <input type="checkbox" id="post-publish" name="post[publish]" value="Yes" />
                  <label htmlFor="Yes">Yes</label>
                  <input type="checkbox" id="post-tags" name="post[publish]" value="No" checked/>
                  <label htmlFor="modiin">No</label>
                </div>
              </fieldset>
              <br />
              <PostEditor />
              <div id="submit-btn"><input type="submit" /></div>
            </form>
            </div>
        </div>

      </React.Fragment>
    )
  }

}
export default WritePost