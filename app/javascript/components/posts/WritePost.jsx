import React from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { Editor, RichUtils, getDefaultKeyBinding } from 'draft-js';
import { saveEditorState, setCurrentDraft, loggedIn } from '../../actions/UserActions';
import { BlockStyleControls, InlineStyleControls } from './StyleControls';
import PostActions from './PostActions';


class WritePost extends React.Component {
  onChange = (editorState) => {
    this.props.saveEditorState(editorState)
 };

 focus = () => this.refs.editor.focus();

 handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9) {
        const newEditorState = RichUtils.onTab(

          e,
          this.props.editorState,
          4, /* maxDepth */
        );
        if (newEditorState !== this.props.editorState) {
          this.onChange(newEditorState);
        }
        return;
    }
    return getDefaultKeyBinding(e);
  }

  toggleBlockType = (blockType) => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }
  
  toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  getBlockStyle = (block) => {
    switch (block.getType()) {
      case 'blockquote': return 'PostEditor-blockquote';
      default: return null;
    }
   }

   componentDidMount(){
    this.props.loggedIn()
  }
  render() {
    const editorState = this.props.editorState;
      let className = 'PostEditor-editor';
      var contentState = this.props.editorState.getCurrentContent();
      if (!contentState.hasText()) {
         if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' PostEditor-hidePlaceholder';
         }
      }
      const styleMap = {
         CODE: {
           backgroundColor: 'rgba(0, 0, 0, 0.05)',
           fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
           fontSize: 16,
           padding: 2,
         },
        };
    return (
      <React.Fragment>

        <div className="writepost-container">
            <div id="writepost-form">
              <form onSubmit={this.saveOrUpdateDraft} encType="multipart/form-data" method="post">
              <input type="hidden" id="post-user-id" name="[post]user_id" value={this.props.id} />
              <span id="post-title"><label htmlFor="title">Title </label><input type="text" id="post-title-text" name="post[title]" /></span>
              <br />
              <fieldset id="post-tags">
                <legend>Choose your tags</legend>
                <div id="tag-div">
                  <input type="checkbox" id="post-tags-content" name="post[tags]" value="jerusalem" />
                  <label htmlFor="jerusalem">Jerusalem</label>
                  <input type="checkbox" id="post-tags-content" name="post[tags]" value="modiin" />
                  <label htmlFor="modiin">Modiin</label>
                  <input type="checkbox" id="post-tags-content" name="post[tags]" value="flight" />
                  <label htmlFor="flight">Flight</label>
                  <input type="checkbox" id="post-tags-content" name="post[tags]" value="kids" />
                  <label htmlFor="kids">Kids</label>
                </div>
              </fieldset>
              <fieldset id="post-img-upload">
              <span id="post-img-upload"><label htmlFor="img-upload">Choose Image </label><input type="file" id="post-image" name="post[image]" /></span>
              </fieldset>
              <br />
              <fieldset id="publish-choice">
                <legend>Ready to publish?</legend>
                <div id="tag-div">
                  <input type="radio" id="post-publish-contrent" name="post[publish]" value="Yes" />
                  <label htmlFor="Yes">Yes</label>
                  <input type="radio" id="post-publish-content" name="post[publish]" value="No"/>
                  <label htmlFor="modiin">No</label>
                </div>
              </fieldset>
              <br />
              
              <div>
                <div className="PostEditor-root">
                  <BlockStyleControls
                      editorState={editorState}
                      onToggle={this.toggleBlockType}
                  />
                  <InlineStyleControls
                      editorState={editorState}
                      onToggle={this.toggleInlineStyle}
                  />
                  <div className={className} onClick={this.focus}>
                    <Editor
                      blockStyleFn={this.getBlockStyle}
                      customStyleMap={styleMap}
                      editorState={editorState}
                      handleKeyCommand={this.handleKeyCommand}
                      keyBindingFn={this.mapKeyToEditorCommand}
                      onChange={this.onChange}
                      placeholder="Start typing..."
                      ref="editor"
                      spellCheck={true}
                    />
                  </div>
                </div>
              <PostActions />
            </div>


            </form>
            </div>
        </div>

      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    signed_in: state.signed_in,
    email: state.email,
    first_name: state.first_name,
    last_name: state.last_name,
    user_location: state.user_location,
    twitter: state.twitter,
    id: state.id,
    picture: state.picture,
    headshot: state.headshot,
    editorState: state.editorState,
    currentDraft: state.currentDraft
  }
}
export default connect(mapStateToProps, { saveEditorState, setCurrentDraft, loggedIn })(WritePost)
