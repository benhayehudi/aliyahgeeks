import React from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Editor, RichUtils, getDefaultKeyBinding } from 'draft-js';
import { saveEditorState, setCurrentDraft, getPostEdit, getTags } from '../../actions/BlogPostActions';
import { loggedIn } from '../../actions/UserActions';
import { BlockStyleControls, InlineStyleControls } from './StyleControls';
import PostActions from './PostActions';


class WritePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = (this.props)

   this.handleOnChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }
  

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
    this.props.loggedIn();
    this.props.getTags();

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-116467756-1');
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.post.post) 
      this.setState({
        title: nextProps.post.post.title,
        image: nextProps.post.post.image_file_name,
        tags: nextProps.post.post.tags,
        publish: nextProps.post.post.publish
      })
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
        
    let tagList = this.props.tags !== undefined && this.props.tags !== null ?
      this.props.tags.map(tag => <span><input name="post[tag]" id="post-tag" value={tag.id} type="radio" /><label htmlFor={tag.name}>{tag.name}</label></span>) : "Loading tags..."
    return (
      <React.Fragment>
        {this.props.signed_in ?  

        <div className="writepost-container">
            <div id="writepost-form">
              <form onSubmit={this.saveOrUpdateDraft} encType="multipart/form-data" method="post">
              <input type="hidden" id="post-user-id" name="[post]user_id" value={this.props.id} />
              <span id="post-title">
                <label htmlFor="title">Title</label>
                <input 
                  type="text" 
                  id="post-title-text" 
                  name="post[title]" 
                  onChange={this.handleOnChange}
                />
              </span>
              <br />
              <fieldset id="tags-list">
                <legend>Pick A Topic</legend>
                <div id="tag-div">
                  {tagList}
                </div>
              </fieldset>
              <br />
              <fieldset id="publish-choice">
                <legend>Ready to publish?</legend>
                <div id="tag-div">
                  <input type="radio" id="post-publish-content" name="post[publish]" value="true" />
                  <label htmlFor="Yes">Yes</label>
                  <input type="radio" id="post-publish-content" name="post[publish]" value="false"/>
                  <label htmlFor="No">No</label>
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
        :
        <div id="login-footer">
            Don't have an account yet? <a href="/user/new">Sign up today!</a>
          </div>
        }

      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    signed_in: state.users.signed_in,
    email: state.users.email,
    first_name: state.users.first_name,
    last_name: state.users.last_name,
    user_location: state.users.user_location,
    twitter: state.users.twitter,
    id: state.users.id,
    picture: state.users.picture,
    headshot: state.users.headshot,
    editorState: state.posts.editorState,
    currentDraft: state.posts.currentDraft,
    post: state.posts.current_post,
    tags: state.posts.tags
  }
}
export default connect(mapStateToProps, { saveEditorState, setCurrentDraft, loggedIn, getPostEdit, getTags })(WritePost)
