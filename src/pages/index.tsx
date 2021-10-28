import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const { cep, setCep } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          <Typography color={"error"}>CEP inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"lorem Ipsum"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"Porto Seguro"}
            />
            <UserInformation
              name={"lorem Ipsum"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"Porto Seguro"}
            />
            <UserInformation
              name={"lorem Ipsum"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"Porto Seguro"}
            />
            <UserInformation
              name={"lorem Ipsum"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"Porto Seguro"}
            />
            <UserInformation
              name={"lorem Ipsum"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"Porto Seguro"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
};

export default Home;
