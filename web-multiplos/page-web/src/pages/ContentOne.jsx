import { useParams } from "react-router-dom";

const ContentOne = () => {
    const { id, name } = useParams();

    return (
      <>
            <h1>Lista de Atividades #{ id } - {name}</h1>
      </>
    );
}
 
export default ContentOne;