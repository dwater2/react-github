import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoGithub from '../../assets/logo-github.svg';
import { Title, Form, Repositories } from './styles';
import Repository from '../Repository';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoGithub} alt="Github Explorer"/>
      <Title>Explore respositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10601064?s=400&u=7720fedbd2d6269720abe262f42ac194a7f11c27&v=4"
            alt="Donizete Waterkemper"
          />
          <div>
            <strong>dwater2/front-end-com-reactjs</strong>
            <p>Aplicação de front-end desenvolvimento com REACTJS.</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10601064?s=400&u=7720fedbd2d6269720abe262f42ac194a7f11c27&v=4"
            alt="Donizete Waterkemper"
          />
          <div>
            <strong>dwater2/front-end-com-reactjs</strong>
            <p>Aplicação de front-end desenvolvimento com REACTJS.</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10601064?s=400&u=7720fedbd2d6269720abe262f42ac194a7f11c27&v=4"
            alt="Donizete Waterkemper"
          />
          <div>
            <strong>dwater2/front-end-com-reactjs</strong>
            <p>Aplicação de front-end desenvolvimento com REACTJS.</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );  
}

export default Dashboard;