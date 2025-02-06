/**
 * Colaborador view component.
 * @module components/Views/ColaboradorView
 */
import React from 'react';
import { Container } from '@plone/components';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import {
  TabPane,
  Tab,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react';

const DadosPessoais = ({ area_info, aniversario, id }) => {
  return (
    <Table className={'details'}>
      <TableBody>
        <TableRow>
          <TableCell className={'label'}>Matrícula</TableCell>
          <TableCell className={'value'}>{id}</TableCell>
        </TableRow>
        {area_info && (
          <TableRow>
            <TableCell className={'label'}>Lotação</TableCell>
            <TableCell className={'value'}>
              <UniversalLink item={area_info}>{area_info.title}</UniversalLink>
            </TableCell>
          </TableRow>
        )}
        {aniversario && (
          <TableRow>
            <TableCell className={'label'}>Aniversário</TableCell>
            <TableCell className={'value'}>{aniversario}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
const DadosContato = ({ email, telefone }) => {
  return (
    <Table className={'details'}>
      <TableBody>
        <TableRow>
          <TableCell className={'label'}>E-mail</TableCell>
          <TableCell className={'value'}>{email ? email : '-'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={'label'}>Telefone</TableCell>
          <TableCell className={'value'}>{telefone ? telefone : '-'}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const ColaboradorView = (props) => {
  const { content } = props;
  const {
    title,
    area_info,
    id,
    email,
    aniversario,
    telefone,
    description,
    image,
  } = content;
  const img = image?.scales?.thumb;
  const panes = [
    {
      menuItem: 'Informações',
      render: () => (
        <TabPane>
          <DadosPessoais
            area_info={area_info}
            id={id}
            aniversario={aniversario}
          />
        </TabPane>
      ),
    },
  ];
  if (email || telefone) {
    panes.push({
      menuItem: 'Contato',
      render: () => (
        <TabPane>
          <DadosContato email={email} telefone={telefone} />
        </TabPane>
      ),
    });
  }
  return (
    <Container
      narrow
      id="page-document"
      className="view-wrapper colaborador-view"
    >
      <Container className={'colaborador-header'}>
        <Container className={'dados'}>
          <div className={'nome'}>
            <h1 className="documentFirstHeading">{title}</h1>
            {description && (
              <p className="documentDescription">{description}</p>
            )}
          </div>
        </Container>
        {img && (
          <Container className={'portrait'}>
            <img
              src={img.download}
              alt={`Foto de ${title}`}
              className={'portrait item'}
            />
          </Container>
        )}
      </Container>
      <Container>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Container>
    </Container>
  );
};

export default ColaboradorView;
