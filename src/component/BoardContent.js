import { useParams } from "react-router-dom";

function BoardContent() {

  const {num} = useParams();

  return (
    <>
      <h3>글 상세</h3>
      {num}번 글 입니다.
    </>
  )
  
}
export default BoardContent;