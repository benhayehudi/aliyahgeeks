import React from 'react';
import StyleButton from './StyleButton';

const BLOCK_TYPES = [
   {label: 'H1', style: 'header-one'},
   {label: 'H2', style: 'header-two'},
   {label: 'H3', style: 'header-three'},
   {label: 'H4', style: 'header-four'},
   {label: 'H5', style: 'header-five'},
   {label: 'H6', style: 'header-six'},
   {label: 'Blockquote', style: 'blockquote'},
   {label: 'UL', style: 'unordered-list-item'},
   {label: 'OL', style: 'ordered-list-item'},
  ];

  const INLINE_STYLES = [
   {label: 'Bold', style: 'BOLD'},
   {label: 'Italic', style: 'ITALIC'},
   {label: 'Underline', style: 'UNDERLINE'}
  ];


  export const BlockStyleControls = (props) => {
   const editorState = props.editorState;
   const selection = editorState.getSelection();
   const blockType = editorState
     .getCurrentContent()
     .getBlockForKey(selection.getStartKey())
     .getType();
   return (
     <div className="PostEditor-controls">
       {BLOCK_TYPES.map((type) =>
         <StyleButton
           key={type.label}
           active={type.style === blockType}
           label={type.label}
           onToggle={props.onToggle}
           style={type.style}
         />
       )}
     </div>
   );
  };

  export const InlineStyleControls = (props) => {
   var currentStyle = props.editorState.getCurrentInlineStyle();
   return (
     <div className="PostEditor-controls">
       {INLINE_STYLES.map(type =>
         <StyleButton
           key={type.label}
           active={currentStyle.has(type.style)}
           label={type.label}
           onToggle={props.onToggle}
           style={type.style}
         />
       )}
     </div>
   );
  };