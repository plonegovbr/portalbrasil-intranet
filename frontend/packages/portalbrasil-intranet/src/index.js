// Bookmarks
import Bookmarking from './components/Bookmarking/Bookmarking';

// VLibras
import Libras from '@plonegovbr/volto-vlibras/components/Libras';

// Blocks
/// Listing block variations
import ProfilesTemplate from './components/Blocks/Listing/ProfilesGridTemplate';

/// Areas
import AreasBlockEdit from './components/Blocks/Areas/Edit';
import AreasBlockView from './components/Blocks/Areas/View';
import areasSVG from '@plone/volto/icons/home.svg';

/// Colaboradores
import ColaboradoresBlockEdit from './components/Blocks/Colaboradores/Edit';
import ColaboradoresBlockView from './components/Blocks/Colaboradores/View';
import colaboradoresSVG from '@plone/volto/icons/group.svg';

/// Gestor
import GestorBlockEdit from './components/Blocks/Gestor/Edit';
import GestorBlockView from './components/Blocks/Gestor/View';
import gestorSVG from '@plone/volto/icons/user.svg';

// Views
import AreaView from './components/Views/AreaView';
import ColaboradorView from './components/Views/ColaboradorView';
import ServicoView from './components/Views/ServicoView';

// Reducers
import { acessibilidade } from './reducers/acessibilidade';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
    contextualVocabularies: ['plonegovbr.intranet.voc.gestores'],
    intranet: {
      acessibilidade: {
        enable_contraste: false,
        enable_fonte: true,
        enable_link: false,
      },
      footer: {
        display_sitemap: false,
        display_toollogo: true,
      },
    },
    image_crop_aspect_ratios: [
      {
        label: '16:9',
        ratio: 16 / 9,
      },
      {
        label: '4:3',
        ratio: 4 / 3,
      },
      {
        label: '1:1',
        ratio: 1,
      },
    ],
  };

  // Views
  /// Content Types
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Area: AreaView,
    Colaborador: ColaboradorView,
    Servico: ServicoView,
  };

  // Blocks
  /// Group Blocks
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'intranet', title: 'Intranet' },
  ];

  // Listing Variations
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'profiles',
      title: 'Perfis',
      template: ProfilesTemplate,
    },
  ];

  /// New blocks
  config.blocks.blocksConfig.areasBlock = {
    id: 'areasBlock',
    title: 'Áreas',
    group: 'intranet',
    icon: areasSVG,
    view: AreasBlockView,
    edit: AreasBlockEdit,
    restricted: ({ properties }) => properties.portal_type !== 'Area',
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.colaboradoresBlock = {
    id: 'colaboradoresBlock',
    title: 'Equipe',
    group: 'intranet',
    icon: colaboradoresSVG,
    view: ColaboradoresBlockView,
    edit: ColaboradoresBlockEdit,
    restricted: ({ properties }) => properties.portal_type !== 'Area',
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.gestorBlock = {
    id: 'gestorBlock',
    title: 'Gestor',
    group: 'intranet',
    icon: gestorSVG,
    view: GestorBlockView,
    edit: GestorBlockEdit,
    restricted: ({ properties }) => properties.portal_type !== 'Area',
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  /// Default blocks
  config.blocks.initialBlocks = {
    ...config.blocks.initialBlocks,
    Area: [
      'title',
      'description',
      'areasBlock',
      'gestorBlock',
      'colaboradoresBlock',
    ],
    Document: ['title', 'description'],
    'News Item': ['title', 'description', 'leadimage'],
  };

  // Habilita Bookmarks e VLibras
  config.settings.appExtras = [
    ...config.settings.appExtras,
    {
      match: '/',
      component: Bookmarking,
    },
    {
      match: '',
      component: Libras,
    },
  ];

  //Reducers
  config.addonReducers = {
    ...config.addonReducers,
    acessibilidade,
  };

  return config;
};

export default applyConfig;
