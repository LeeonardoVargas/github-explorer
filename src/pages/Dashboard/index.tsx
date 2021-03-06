import React, { FormEvent, useState, useEffect } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Title, Error, Form, Repositories } from './styles';
import logo from '../../assets/logo.png';

import reposDefault from './content';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newrepository, setNewRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepos = localStorage.getItem('@githubexplorer:repositories');
    if (storagedRepos) return JSON.parse(storagedRepos);
    return reposDefault;
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newrepository) {
      setInputError('Digite um respositório válido');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newrepository}`);
      const repo = response.data;
      // Fazendo a inserção no ínicio da lista
      setRepositories([repo, ...repositories]);
      setNewRepository('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@githubexplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  return (
    <>
      <Link to="/">
        <img src={logo} alt="Github Explorer" width="300" height="auto"/>
      </Link>
      <Title>Repositórios Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newrepository}
          onChange={e => setNewRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar Repositório</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repo => (
          <Link key={repo.full_name} to={`/repositories/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <span>{repo.description}</span>
            </div>
            <GoChevronRight size={40} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
