import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id);
  console.log(mode);
  return (
    <div>
      <h1>Edit</h1>
      <button onClick={() => setSearchParams({ who: "123" })}>
        {" "}
        Qs 바꾸기
      </button>
      <button onClick={() => navigate("/")}>home</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
