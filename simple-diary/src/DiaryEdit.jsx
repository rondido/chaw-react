import { useRef, useState, memo, useContext } from "react";
import { DiaryDispatchContext } from "./App";

function DiaryEdit() {
  const { onCreate } = useContext(DiaryDispatchContext);
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const hanldeChangeState = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const handleSubmit = () => {
    if (state.author.length < 1) {
      //focus
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      //focus
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: "",
    });
  };
  return (
    <div className="DiaryEdit">
      DiaryEdit
      <div>
        <input
          ref={authorInput}
          value={state.author}
          onChange={hanldeChangeState}
          name="author"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          name="content"
          onChange={hanldeChangeState}
        />
      </div>
      <div>
        <h3>오늘의 감정 점수:</h3>

        <select
          name="emotion"
          value={state.emotion}
          onChange={hanldeChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
}

export default memo(DiaryEdit);
