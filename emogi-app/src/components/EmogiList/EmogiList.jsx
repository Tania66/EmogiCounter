import React from 'react'
import "../../App.css";
import { Component } from 'react';

class EmogiList  extends Component {
  render() {
    const { list,handleClickVoice } = this.props;

    return (
      <ul className='container-emogi-list'>
      {list.map((emogi) => (
        <li key={emogi.id} >
          <button className='btn_emogi' type='button'  onClick={() => handleClickVoice(emogi.id)}>
  {emogi.smile}
          </button>
          <span className='emogi_span'>{emogi.voice}</span>
        </li>
      ))}
  </ul>
    );
  }
}
export default EmogiList;