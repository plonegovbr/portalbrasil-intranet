import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@plone/components';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import BodyClass from '@plone/volto/helpers/BodyClass/BodyClass';
import config from '@plone/volto/registry';
import { setAcessibilidade } from '../../actions/Acessibilidade/Acessibilidade';
import acessibilidadeIcon from '../../icons/acessibilidade.svg';
import contrasteAtivoIcon from '../../icons/contraste-h.svg';
import contrasteDesatIcon from '../../icons/contraste-d.svg';

const ContrasteIcons = {
  h: contrasteAtivoIcon,
  d: contrasteDesatIcon,
};

const LinkTexto = ({ enabled }) => {
  return (
    <Container className={'option link texto'}>
      {enabled ? (
        <UniversalLink href={'/acessibilidade'}>
          <Icon
            name={acessibilidadeIcon}
            size={'16px'}
            title={'Link Acessibilidade'}
            className={'icon'}
          />
          <span className={'label'}>Acessibilidade</span>
        </UniversalLink>
      ) : (
        <>
          <Icon
            name={acessibilidadeIcon}
            size={'16px'}
            title={'Link Acessibilidade'}
            className={'icon'}
          />
          <span className={'label'}>Acessibilidade</span>
        </>
      )}
    </Container>
  );
};

const Contraste = ({ atual, onClick }) => {
  const iconName = ContrasteIcons[atual] || contrasteDesatIcon;
  const value = atual === 'd' ? 'h' : 'd';
  const handleClick = (e) => {
    let target = e.target;
    if (target.nodeName === 'svg') {
      target = target.parentNode;
    }
    const { value } = target;
    onClick(value);
  };
  return (
    <Container className={'option contraste'}>
      <button value={value} onClick={handleClick}>
        <Icon
          name={iconName}
          size={'16px'}
          title={'Alto Contraste'}
          className={'icon'}
        />
      </button>
    </Container>
  );
};

const Fontes = ({ atual, onClick }) => {
  const fontes = [
    ['l', 'A+'],
    ['m', 'A'],
    ['s', 'A-'],
  ];
  const handleClick = (e) => {
    const { value } = e.target;
    onClick(value);
  };
  return (
    <Container className={'option fonte'}>
      {fontes.map((item, idx) => {
        const value = item[0];
        const label = item[1];
        const options = {
          value: value,
          onClick: handleClick,
        };
        return (
          <button key={idx} {...options}>
            {label}
          </button>
        );
      })}
    </Container>
  );
};

const BarraAcessibilidade = () => {
  const acessibilidade = useSelector((state) => state.acessibilidade);

  const settings = config.settings.intranet?.acessibilidade;
  const dispatch = useDispatch();
  const handleContrasteClick = (value) => {
    if (value === undefined) {
      value = 'd';
    }
    dispatch(setAcessibilidade(value, acessibilidade.fonte));
  };

  const handleFonteClick = (value) => {
    if (value === undefined) {
      value = 'm';
    }
    dispatch(setAcessibilidade(acessibilidade.contraste, value));
  };
  return (
    <Container className={'barra-wrapper'}>
      <BodyClass
        className={`acc-cont-${acessibilidade.contraste} acc-font-${acessibilidade.fonte}`}
      />
      <Container layout className={'barra'}>
        <LinkTexto enabled={settings.enable_link} />
        {settings.enable_contraste && (
          <Contraste
            atual={acessibilidade.contraste}
            onClick={handleContrasteClick}
          />
        )}
        {settings.enable_fonte && (
          <Fontes atual={acessibilidade.fonte} onClick={handleFonteClick} />
        )}
      </Container>
    </Container>
  );
};

export default BarraAcessibilidade;
