import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextField from "ui/components/inputs/TextField/TextField";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <TextField Label={"Digite seu CEP"} fullwidth />

      <UserInformation
        name={"lorem Ipsum"}
        picture={"https://github.com/hanashiro.png"}
        rating={3}
        description={"Porto Seguro"}
      />
    </div>
  );
};

export default Home;
