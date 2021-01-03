import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref,() => {
   return {
     focus: () => {
       inputRef.current.focus()
     }
   }
  }, [inputRef]);

  return <input type="text" ref={inputRef}/>
})

// const HYInput = forwardRef(HYInput) 或者定义后再进行包裹

function ForwardRef (props){
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={ e => inputRef.current.focus() }>点击聚焦</button>
    </div>
  );
}

export default ForwardRef;
