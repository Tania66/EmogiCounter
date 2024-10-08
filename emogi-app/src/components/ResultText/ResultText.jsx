import React, { Component } from 'react'

class ResultText extends Component  {
  render(){
   const {list} = this.props;
  const  showResult = () => {
    const res = list.reduce((prev, cur) => {
      if (prev.voice > cur.voice) {
        return prev;
      }
      return cur;
    }, 0);
    localStorage.setItem("bestEmogi", JSON.stringify(res)); 
return res;
  };

const {voice, smile} = showResult();
  return (
    <div className='inner-result'>
      <h2 className='title_winer'>winner</h2>
      <span>{smile}</span>
   <p className='count_text'>Number of votes: {voice}</p>
    </div>
  )

  }





}

export default ResultText
