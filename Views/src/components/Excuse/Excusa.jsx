import Layout from "../layout/Layout";
import History from "./History";
import Form from "./Form";
import useAuth from '../../hooks/useAuth';
const Excusa = () => {
  const {statusComponent} = useAuth();
  return (
    <Layout>
      {statusComponent?<Form/>: <History/>}  
    </Layout>
  );
};

export default Excusa;
